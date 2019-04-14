import React, { Component } from 'react';
import logo from './heartbeat.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {
  Route,
  HashRouter,
  Link
} from "react-router-dom";
import ScheduleHistory from './Admin.js'
import Schedule from './Schedule';

export default class App extends Component {  

  state = {
    response: '',
    responseToGet: ''
  }

  handleSchedule = async e => {
    e.preventDefault();
    fetch('/', 
    {
      method: 'get',
      dataType: 'json',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
  };

  handleAdmin = async e => {
    e.preventDefault();
    fetch('/api/admin', 
    {
      method: 'get',
      dataType: 'json',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(res => {
      this.setState( { responseToGet: res.express });
    });
  };

  render() {
    return (
      <HashRouter>
        <div className="App">
          <AppBar className="App-color" position="relative"> 
            <Toolbar className="App-color">
            <Button
              className="App-admin-button"
              variant="outlined"
                onClick={this.handleSchedule}
              >      
              <Link to="/">
              Agendar</Link>
            </Button>
            <Button
              className="App-admin-button"
              variant="outlined"
                onClick={this.handleAdmin}
              >      
              <Link to="/api/admin">
              Administração</Link>
            </Button>
            </Toolbar>
          </AppBar>
          <header className="App-header"> 
            <img src={logo} className="App-logo" alt="logo" />
            
            <header className="App-medical-header">
              MEDICAL
            </header>
          </header>          
        </div>
        <div className="content">
          <Route exact path="/" component={Schedule}/>
          <Route
          path="/api/admin"
          render={() => <ScheduleHistory data={this.state.responseToGet} />} 
          />
        </div>
      </HashRouter>
    );
  }
}