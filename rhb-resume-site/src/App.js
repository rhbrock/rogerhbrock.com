import React, {Component} from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import logo from './logo.svg';
import './App.css';
import Home from './home';
import About from './about';
import Resume from './resume';



class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <Home />
        <About />
        <Resume />
      </div>
    );
  }
}

export default App;
