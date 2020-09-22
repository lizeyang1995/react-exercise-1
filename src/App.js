import React, { Component } from 'react';
import './App.scss';
import Image from './components/Image';
import Hello from './components/Hello';
import Title from './components/Title';
import SplitLine from './components/SplitLine';
import AboutMe from './components/AboutMe';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Image />
        <Hello />
        <Title />
        <SplitLine />
        <AboutMe />
      </main>
    );
  }
}

export default App;
