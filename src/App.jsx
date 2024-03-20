import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './Todo/TodoList'
import Weather from './weather/Weather'

function App() {
 return(
    <>
      <TodoList/>
  <Weather/>
    </>

 )
}

export default App
