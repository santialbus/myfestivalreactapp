import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
    fab: {
      margin: theme.spacing.unit * 2,
    },
    absolute: {
      position: 'absolute',
      bottom: theme.spacing.unit * 2,
      right: theme.spacing.unit * 3,
    },
  });
  
  function SimpleTooltip(props) {
    const { classes } = props;
    return (
      <div>
        <Tooltip title="FAB 'position: absolute;'">
          <Button variant="fab" color="secondary" className={classes.absolute}>
            <AddIcon />
          </Button>
        </Tooltip>
      </div>
    );
  }
  
  SimpleTooltip.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(SimpleTooltip);