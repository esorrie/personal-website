import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './NavBar.jsx'
import Intro from './Intro.jsx'
import About from './About.jsx'
import Portfolio from './Portfolio.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <Intro />
    <About />
    <Portfolio />
    {/* <Contact /> */}
  </React.StrictMode>,
)
