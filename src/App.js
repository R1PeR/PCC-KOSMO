import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
