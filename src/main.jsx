import React from 'react'
import ReactDOM from 'react-dom/client'
import Intro from './Intro/Intro.jsx'
import NavBar from './Navbar/NavBar.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <Intro />
    {/* <About /> */}
    {/* <Portfolio /> */}
    {/* <Contact /> */}
  </React.StrictMode>,
)
