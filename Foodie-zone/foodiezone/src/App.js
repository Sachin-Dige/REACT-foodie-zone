import React, { useEffect, useState } from 'react'
// import './App.css'

import { BrowserRouter as Router,
  Navigate,
  Route, 
  Routes} from 'react-router-dom'
    
import Home from './Components/Home'
import Addrecipe from './Components/Addrecipe'
import Myrecipe from './Components/Myrecipe'
import Signin from './Components/Signin'
import Register from './Components/Register'
import Myfavs from './Components/Myfavs'
import Logout from './Components/Logout'
import About from './Components/About'

import Random from './Components/Random'
const App = () => {

  const [user, setUser] = useState(null)

  useEffect(() => {
    // let userList=localStorage.getItem('userList');
    let IS_LOGIN=localStorage.getItem("isLogin")
    IS_LOGIN ? setUser(true) : setUser(false);
  }, [])

  return (

<div>
    <Router>

      <Routes>

        <Route path='/' element={<Home/>}/>

        {user && (
        <>
        <Route path='/myfavs' element={<Myfavs/>}/>
        <Route path='/logout' element={<Logout loggedout={()=> setUser(false)}/>}/>
        <Route path='/addrecipe' element={<Addrecipe/>}/>
        <Route path='/random' element={<Random/>}/>
        <Route path='/myrecipes' element={<Myrecipe/>}/>
        <Route path='/about' element={<About/>}/>

        {/* <Route path='/about' element={<About/>}/> */}
        </>
        )}

        {!user && (
          <>
          <Route path='/signin' element={<Signin authenticate={()=>setUser(true)}/>}/>
          <Route path='/register' element={<Register/>}/>
        </>
        )}

        <Route path='*'
        element={<Navigate to={user?"/home":"/signin"}/>}/>
        
      </Routes>
    </Router>
</div>
  )
}


export default App

