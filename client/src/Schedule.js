import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet } from 'react-native';
import './App.css';
import Button from '@material-ui/core/Button';

class Schedule extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
    name: '',
    telephone: '',
    email: '',
    date: '',
    startTime: '',
    endTime: ''
  };

  componentDidMount() {
    var today = new Date();
    today.setDate(today.getDate());

    this.setState({ date: today.toISOString().substr(0,10)});

    //test
    // this.callApi()
    //   .then(res => this.setState({ response: res.express }))
    //   .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/schedule', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        post: this.state.post,
        name : this.state.name,
        telephone : this.state.telephone,
        email : this.state.email,
        date : this.state.date,
        startTime : this.state.startTime,
        endTime : this.state.endTime
     }),
    });
    const body = await response.text();
    this.setState({ responseToPost: body });
  };

  render() {
    return (
      <div className="App">
          <p>
            <strong>Insira seus dados para agendar uma consulta:</strong>
          </p>
          <form onSubmit={this.handleSubmit}>
            <div className="App-div-inline">
              <div className="App-div">
                <label className="App-label">
                  Nome
                </label>
              </div>
              <div className="App-div">
                <label className="App-label">
                  Telefone
                </label>
              </div>
              <div className="App-div">
                <label className="App-label">
                  Email
                </label>
              </div>
              <div className="App-div">
                <label className="App-label">
                  Data
                </label>
              </div>
              <div className="App-div">
                <label className="App-label">
                  Horário
                </label>
              </div>
            </div>
            <div className="App-div-inline">
              <div className="App-div">
                <input
                  className = "App-input"
                  type="text"
                  pattern="[a-zA-Z ]+"
                  value={this.state.name}
                  onChange={e => this.setState({ name: e.target.value })}
                />
              </div>
              <div className="App-div">
                <input 
                  className = "App-input"
                  type="number"
                  pattern="[0-9]+"
                  value={this.state.telephone}
                  onChange={e => this.setState({ telephone: e.target.value })}
                />
              </div>
              <div className="App-div">
                <input
                  className = "App-input"
                  type="text"
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })}
                />
              </div>
              <div className="App-div">
                <input
                  className = "App-input"
                  type="date"
                  value={this.state.date}
                  onChange={e => this.setState({ date: e.target.value })}
                />
              </div>
              <div className="App-div">
                <input
                  className = "App-input"
                  type="time"
                  value={this.state.startTime}
                  onChange={e => this.setState({ startTime: e.target.value })}
                />
                às
                <input
                  className = "App-input"
                  type="time"
                  value={this.state.endTime}
                  onChange={e => this.setState({ endTime: e.target.value })}
                />
              </div>
            </div>
            <div className="App-div">
              <Button
                variant="contained"
                className="App-submit-button"
                type="submit">Agendar
              </Button>
            </div>
          </form>
          <Text>{this.state.responseToPost}</Text>          
        </div>
    )
  }
};


export default Schedule;