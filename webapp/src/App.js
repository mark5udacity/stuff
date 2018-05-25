import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function ProgressElem(props) {
    const { progress } = props;
    console.log('in processElem fn', progress);
    const divStyle = {
        color: 'blue',
        width: `${progress}%`
    };

    return <div className={"progress-bar"}>
        <div className={"progress"} style={divStyle}>
            {progress}%
        </div>
    </div>;
}

class App extends Component {
    
  render() {

      let progress = 'CLick me!';

      const buttonClick = () => {
          for (let i = 1; i <= 10; ++i) {
              console.log('time for: ', i);
              setTimeout(() => {
                      console.log('rerendering for i: ', i);
                      const prog = 10 * i;
                      progress = <ProgressElem progress={prog}/>
                  },
                  i * 500
              );
          }
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

          <button onClick={buttonClick}>{progress}</button>

      </div>
    );
  }
}

export default App;
