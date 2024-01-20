import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Input from './Input'
import './App.css'
import useStorage from './Hooks/useStorage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Input/>
    </>
  )
}

export default App
