import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import SubHeader from './components/sub-header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SubHeader />
      </div>      
    );
  }
}

export default App;
