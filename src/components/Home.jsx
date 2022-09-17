import React from 'react'
import '../App.css';
import { Avatar } from '@mantine/core'
import avatar from '../raphael-avatar.jpg'

export default function Home() {
  return (
    <div className="Text" id="home">
<h1> Hi there 👋, I'm @raphaelspies </h1>
<Avatar src={avatar} size={200} radius={200} className="Avatar"></Avatar>
<p>
{/* I'm a Full Stack Software Engineer,  <br/> */}
<a href="https://www.linkedin.com/in/raphael-spies/">LinkedIn</a> &nbsp;
<a href="mailto:raphspies@gmail.com?subject=Hello%to%Raphspies.com">Email</a> &nbsp;
<a href="https://www.github.com/raphaelspies/">GitHub</a> &nbsp;
</p>
    </div>
  )
}