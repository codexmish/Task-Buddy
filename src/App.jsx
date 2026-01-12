import React from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import ProgressTracker from './components/ProgressTracker'

const App = () => {
  return (
    <>
    <header>
      <h1>TaskBuddy</h1>
      <p>Your friendly task Manager</p>
    </header>
    <TaskForm/>
    <TaskList/>
    <ProgressTracker/>
    
    </>
  )
}

export default App