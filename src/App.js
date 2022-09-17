import React, {useState} from 'react'

import './App.css';
import styled from 'styled-components';
import Sidebar from './components/Sidebar.jsx'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from 'react-router-dom';

import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'

import { Horizontal, Inline, } from './components/stylesheet'

function App() {
  const [view, setView] = useState("Home")

  return (
    <div className="App">
      <Horizontal>

        {/* <Router>
        {/* <Sidebar className="sidebar" /> */}
        {/*</Router> */}
          <Inline>
              <Home/>
              <About/>
              <Skills/>
              <Projects/>
          </Inline>
      </Horizontal>
    </div>
  );
}

export default App;
