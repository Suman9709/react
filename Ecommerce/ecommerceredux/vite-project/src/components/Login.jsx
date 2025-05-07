import React, { useContext, useState } from 'react'
import { useDispatch } from 'react-redux';
import './Login.css'
import { login } from '../redux/slices/userSlice';

function Login() {
    const [displayname, setDisplay] = useState("");
    const dispatcher = useDispatch();
    return (
        <div className='logindiv'>
            <input type="text"
                value={displayname}
                onChange={(e) => setDisplay(e.target.value)} />
            <button onClick={()=>dispatcher(login(displayname))}>Login</button>
        </div>
    )
}

export default Login