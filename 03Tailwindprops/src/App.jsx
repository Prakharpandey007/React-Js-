import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
     <h1 className="bg-green-400 text-black p-4 rounded-md mb-4 ">Jai shree ram </h1>

<Card userName="pandey"btntext="click me" />
<Card userName="prakhar" btntext="visit my app"/>

    </>
  )
}

export default App
