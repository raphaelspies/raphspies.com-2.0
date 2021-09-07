import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import App from '../App'
import Sidebar from '../components/Sidebar.jsx'

beforeEach(() => {
  render(<App />)
})

test('Renders app', ()=> {
  expect(screen.getByText(/Raphael/i)).toBeInTheDocument()
})

test('Renders sidebar', ()=> {
  expect(screen.getByText(/Projects/i)).toBeInTheDocument()
})

test('Sidebar clicks change view: skills', ()=> {
  const skills = screen.getByRole('link', {name: /skills/i})
  userEvent.click(skills)
  const curriculum = screen.getByText(/Curriculum/i)
  expect(curriculum).toBeInTheDocument()
})

test('Clicking multiple sidebar links changes view', ()=> {
  const skills = screen.getByRole('link', {name: /skills/i})
  userEvent.click(skills)
  const about = screen.getByRole('link', {name: /about/i})
  userEvent.click(about)
  expect(screen.getAllByText(/!/i))//.toBeInTheDocument()
})