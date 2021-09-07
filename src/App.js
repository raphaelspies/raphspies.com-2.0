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

const Horizontal = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const Inline = styled.div`
  margin-left: 350px;
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
        <Sidebar className="sidebar" />
          <Inline>
            <Switch>
                <Route exact path="/" handleClick={handleClick}> <Home/> </Route>
                <Route path="/about" handleClick={handleClick}> <About/> </Route>
                <Route path="/projects" handleClick={handleClick}> Projects </Route>
                <Route path="/skills" handleClick={handleClick}> <Skills/> </Route>
                <Route path="/contact" handleClick={handleClick}> Contact </Route>
              </Switch>
          </Inline>
        </Router>
      </Horizontal>
    </div>
  );
}

export default App;
