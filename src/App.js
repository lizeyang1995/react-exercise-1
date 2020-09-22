import React, { Component } from 'react';
import './App.scss';
import Image from './components/Image';
import Hello from './components/Hello';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Image />
        <Hello />
      </main>
    );
  }
}

export default App;
