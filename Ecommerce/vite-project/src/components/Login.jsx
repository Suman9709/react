import React,{useContext, useState} from 'react'
import './Login.css'
import { UserContext } from '../context/UserContext';

function Login() {
    const [displayname, setDisplay] = useState("");
    const {login} = useContext(UserContext);
    return (
        <div className='logindiv'>
            <input type="text"
                value={displayname}
                onChange={(e) => setDisplay(e.target.value)} />
            <button onClick={()=>login(displayname)}>Login</button>
        </div>
    )
}

export default Login