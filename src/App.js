import React, { Component } from 'react';
import './App.scss';
import Image from './components/Image';
import Hello from './components/Hello';
import Title from './components/Title';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Image />
        <Hello />
        <Title />
      </main>
    );
  }
}

export default App;
