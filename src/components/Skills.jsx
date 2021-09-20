import React from 'react'
import '../App.css';
import styled from 'styled-components';

const Horizontal = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const Vertical = styled.div`
  display: none;
  flex-direction: none;
`;

export default function Skills(props) {
const frontend = [ "HTML5", "CSS3", "React.js", "React Router", "Redux", "MaterialUI", "Styled Components", "JQuery",]
const backend = ["Javascript", "Python", "Node.js", "Express", "Fastify", "MySQL", "PostreSQL", "MongoDB", "Knex", "Docker", "Amazon AWS", "Nginx"]
const testing = ["Mocha/Chai", "Jest", "React Testing Library", "Loader.io", "AutoCannon", "K6", "Lighthouse" ]
const devtools = ["Agile", "Scrum", "Trello", "VSCode", "Git", "NPM",  "Webpack", "Babel", "Parcel", "Microsoft Project", ]

  return (
    <div >
      <h1>Technical Skills</h1>
      <Horizontal>

        <ul>
          <h3>Front End</h3>
          {frontend.map((skill) => <li>{skill} </li> )}
        </ul>

        <ul>
          <h3>Back End</h3>
          {backend.map((skill) => <li>{skill} </li> )}
        </ul>

        <ul>
          <h3>Testing</h3>
          {testing.map((skill) => <li>{skill} </li> )}
        </ul>

        <ul>
          <h3>Project Tools</h3>
          {devtools.map((skill) => <li>{skill} </li> )}
        </ul>

      </Horizontal>
    </div>
  )
}