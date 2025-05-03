import React from 'react'

function Profile({name,setName}) {
  return (
    <>
    <div>Profile : {name}</div>
    <button onClick={()=>setName("abcd")}>Change Name</button>
    </>
  )
}

export default Profile