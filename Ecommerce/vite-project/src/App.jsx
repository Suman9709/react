import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MainBody from './components/MainBody'
import { UserContext } from './context/UserContext'
import Login from './components/Login'

function App() {
  const {username} = useContext(UserContext);
  return (
    <>
      <Navbar/>
      {username ? <MainBody/> : <Login/>}
      <Footer/>
    </>
  )
}

export default App