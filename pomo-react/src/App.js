import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="panel panel-default app-content center-block">
        <div className="panel body">
            <div className="container-fluid">
              <div className="row">
                <h2 className="text-center">Pomodoro</h2>
              </div>
              <div className="row">
                <h2 className="text-center">00:00:00</h2>
              </div>
              <div className="row">
                <h2 className="text-primary">Set Timer</h2>
                <div className="form-group">
                  <div className="col-sm-3">
                    <label htmlFor="hours">Hours</label>
                  </div>
                  <div className="col-sm-9">
                    <input id="hours" type="number" className="form-control"/>
                  </div>
                  <div className="col-sm-3">
                    <label htmlFor="hours">Hours</label>
                  </div>
                  <div className="col-sm-9">
                    <input id="hours" type="number" className="form-control"/>
                  </div>
                  <div className="col-sm-3">
                    <label htmlFor="hours">Hours</label>
                  </div>
                  <div className="col-sm-9">
                    <input id="hours" type="number" className="form-control"/>
                  </div>

                </div>
              </div>
            </div>

        </div>
      </div>
    );
  }
}

export default App;
