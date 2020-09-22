import React, { Component } from 'react';
import './App.scss';
import Image from './components/Image';
import Hello from './components/Hello';
import Title from './components/Title';
import SplitLine from './components/SplitLine';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import AboutMeContent from './components/AboutMeContent';
import EducationContent from './components/EducationContent';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Image />
        <Hello />
        <Title />
        <SplitLine />
        <AboutMe />
        <AboutMeContent />
        <Education />
        <EducationContent />
      </main>
    );
  }
}

export default App;
