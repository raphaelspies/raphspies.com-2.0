import React from 'react'
import '../App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import styled from 'styled-components';

import Home from './Home'
import About from'./About'

const Sidediv = styled.div`
  padding: 10px;
  min-width: 300px;
  font-weight: bold;
  position: fixed;
  text-align: right;
  height: 100%;
  background-image: linear-gradient(to bottom right, #cccccc, #33333f);
  background-repeat: no-repeat;
  /* color: #49bf9d; */
`;

const LINK = styled(Link)`
  color: #49bf9d;
`;

const HR = styled.hr`
  color: #49bf9d;
`;

function Sidebar(props) {
  return (
      <Sidediv>
        <h1 className="Sidebar-header">
          I am Raphael Spies.
        </h1>
        <HR/>
        <li><LINK to="/">Home</LINK></li>
        <HR/>
        <li><LINK to="/about">About</LINK></li>
        <HR/>
        <li><LINK to="/projects">Projects</LINK></li>
        <HR/>
        <li><LINK to="/skills">Technical Skills</LINK></li>
        <HR/>
        <li><LINK to="/contact">Contact</LINK></li>
        <HR/>
      </Sidediv>
  )
}

export default Sidebar;