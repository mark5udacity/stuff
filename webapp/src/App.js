import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

      const { progress } = this.props;
      console.log('PROGRESS', progress);

      const styleColor = 'blue';
      const divStyle = {
          color: styleColor,
          width: `${progress}%`
      };


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>


          <div className={"progress-bar"}>
              <div className={"progress"} style={divStyle}>
                  {progress}%
              </div>
          </div>
      </div>
    );
  }
}

export default App;
