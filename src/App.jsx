import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="bg-red-500">
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1> 
    </div>
    </>
  )
}

export default App
