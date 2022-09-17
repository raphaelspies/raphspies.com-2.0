import React from 'react'
import '../App.css';
import { Avatar } from '@mantine/core'
import avatar from '../raphaelAvatar.jpg'
import styled from 'styled-components';
import { Text, Centered, SAvatar } from './stylesheet';

export default function Home() {
  return (
    <Text id="home">
      <Centered>
        <h1> Hi there 👋, I'm @raphaelspies </h1>
      </Centered>
      <Centered>
        <SAvatar src={avatar} size={200} radius={200}> </SAvatar>
      </Centered>
      <Centered>
        <p>
        {/* I'm a Full Stack Software Engineer,  <br/> */}
        <a href="https://www.linkedin.com/in/raphael-spies/">LinkedIn</a> &nbsp;
        <a href="mailto:raphspies@gmail.com?subject=Hello%to%Raphspies.com">Email</a> &nbsp;
        <a href="https://www.github.com/raphaelspies/">GitHub</a> &nbsp;
        </p>
      </Centered>
      </Text>
  )
}