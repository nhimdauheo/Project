import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import MainStaff from './components/MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore'

const store = ConfigureStore();

class App extends Component {

  render() {
    return (
      <div className="App">
        <Provider store={store}>
        <BrowserRouter>
          <div>
            <MainStaff />
          </div>
        </BrowserRouter>
        </Provider>
      </div>
    );
  }
}
export default App;
