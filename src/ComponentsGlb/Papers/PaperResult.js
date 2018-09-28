import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: 500,
    float: 'left',
  },
});

class PaperResult extends React.Component {

    state = {
        data: [],
    };

    componentDidMount() {
        const url = "http://localhost:8080/api/viewsinglenamefestival/" + this.props.myobj;
        const dataName = this.props.myobj;
        console.log(url)
        console.log(dataName);
        const { data } = this.state;
        fetch(url)
            .then(result => result.json())
            .then(result => {
                for (let i in result) {
                    data.push(result[i]);
                    console.log(result[i])
                    console.log(this.props)
                    console.log(url)
                }
                this.setState({ data });
            });
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Paper className={classes.root} elevation={5}>
                    {
                        this.state.data.map(element => {
                            return (
                                <div>
                                <Typography variant="headline" component="h3">
                                {element.name}
                                </Typography>
                                <Typography component="p">
                                    Descripcion: {element.descripcion}
                                </Typography>
                                <Typography component="p">
                                    Genero: {element.genero}
                                </Typography>
                                <Typography component="p">
                                    Precio: {element.precio} 
                                </Typography>
                                <Typography component="p">    
                                    Del {element.fecha_ini} al {element.fecha_fin}
                                </Typography>
                                </div>
                            );
                        }
                    )};
                </Paper>
            </div>
        );
    }

}

PaperResult.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperResult);