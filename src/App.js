import React, {useState} from 'react'

import './App.css';
import styled from 'styled-components';
import Sidebar from './components/Sidebar.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'

const Horizontal = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const Inline = styled.div`
  margin-left: 250px;
`;

function App() {
  const [view, setView] = useState("Home")

  const handleClick = (event) => {
    console.log(event.target.value)
  }

  return (
    <div className="App">
      <Horizontal>

        <Router>
        {/* <Sidebar className="sidebar" /> */}
        </Router>
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
