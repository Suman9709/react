import React from 'react'
import './Mainbody.css'
import ItemList from './ItemList'
import Cart from './Cart'

function MainBody() {
  return (
    <div className="maindiv">
      <ItemList />
      <Cart />
    </div>
  )
}

export default MainBody