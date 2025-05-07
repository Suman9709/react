import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MainBody from './components/MainBody'
import Login from './components/Login'
import { useSelector } from 'react-redux'

function App() {
  const username = useSelector(state => state.user.username);
  return (
    <>
      <Navbar />
      {username ? <MainBody /> : <Login />}
      <Footer />
    </>
  )
}

export default App