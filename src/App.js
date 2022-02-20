import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import MainStaff from './components/MainComponent';

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <MainStaff />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
