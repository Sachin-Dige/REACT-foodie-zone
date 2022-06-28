import React from 'react'
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate 
  } from "react-router-dom"
import Addrecipe from './Components/Addrecipe'
import Conatct from './Components/Conatct'
import Home from './Components/Home'
const App = () => {
  return (
    <>

    <Router>
      <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/contact' element={<Conatct/>}/>
      <Route path='/addrecipe' element={<Addrecipe/>}/>
   
      </Routes>
    </Router>
    </>
  )
}

export default App
