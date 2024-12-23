import { useState } from 'react'
import './App.css'
import Goal from "./components/Goal";

function App() {

  return (
    <div>
      <h1>Steps</h1>
      <Goal 
      goalTitle="Learn a language"/>
      <Goal
      goalTitle="Build a gaff"/>
      <Goal
      goalTitle="Release an app"/>
    </div>
  )
}

export default App
