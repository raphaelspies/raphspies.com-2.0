import React from 'react'
import '../App.css';
import styled from 'styled-components';
import { Text, Horizontal, } from './stylesheet';


export default function Skills(props) {
const frontend = [ "HTML5", "CSS3", "React.js", "Next.js", "React Router", "Redux", "MaterialUI", "Styled Components", "JQuery",]
const backend = ["Javascript", "Python", "Node.js", "Express", "Fastify", "MySQL", "PostreSQL", "MongoDB",  "Docker", "Amazon AWS", "Nest.js"]
const testing = ["Mocha/Chai", "Jest", "React Testing Library", "AutoCannon", "Jira XRay",]
const devTools = ["Agile", "Scrum", "Jira", "Git", "NPM",  "Webpack", "WebStorm", "XCode", "Android Studio", ]

  return (
    <Text id="skills">
      <h1>Technical Skills</h1>
      <Horizontal>

        <ul>
          <h3>Front End</h3>
          {frontend.map((skill, index) => <li key={index}>{skill} </li> )}
        </ul>

        <ul>
          <h3>Back End</h3>
          {backend.map((skill, index) => <li key={index}>{skill} </li> )}
        </ul>

        <ul>
          <h3>Testing</h3>
          {testing.map((skill, index) => <li key={index}>{skill} </li> )}
        </ul>

        <ul>
          <h3>Project Tools</h3>
          {devTools.map((skill, index) => <li key={index}>{skill} </li> )}
        </ul>

      </Horizontal>
    </Text>
  )
}