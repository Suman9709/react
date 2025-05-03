import React,{useState} from 'react'
import Navbar from './comp/Navbar';
import Cart from './comp/Cart';
import Profile from './comp/Profile';
import Footer from './comp/Footer';

function App() {
  const [name , setName] = useState("Abhi");

  return (
    <>
      <Navbar name={name} setName={setName}/>
    <Cart name={name} setName={setName}/>
    <Footer name={name} setName={setName}/>
    </>
  )
}

export default App