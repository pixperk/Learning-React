import React, { Suspense, lazy } from 'react'
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
/* import Home from './Home'
import Contact from './Contact'
import About from './About' */

const Home = lazy(()=>import("./Home"))
const Contact = lazy(()=>import("./Contact"))
const About = lazy(()=>import("./About"))

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      </Suspense>
    </Router>
  )
}

export default App
