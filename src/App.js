import React, { Component } from 'react';
import './App.css';
import AppBarMenu from './ComponentsGlb/AppBars/AppBarMenu';
import SimpleTooltip from './ComponentsGlb/Tooltip/SimpleTooltip';

class App extends Component {
  
state = {
    data: []
};
  
  render() {

    return (
      <div className="App">
        <AppBarMenu />
        <SimpleTooltip />
      </div>
    );
  }
}

export default App;
