import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import FutureOf from './Components/FutureOf'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
    <FutureOf/>
  
    </>
  )
}

export default App
