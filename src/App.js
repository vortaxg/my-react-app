import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from '../node_modules/material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './components/MyAwesomeReactComponent';
import Dashboard from './components/Dashboard';
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Dashboard />
  </MuiThemeProvider>
    );
  }
}
export default App;