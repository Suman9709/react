import {createContext, useState} from 'react';

export const UserContext = createContext(null);

export function UserProvider({children})
{
    const [username , setuserName] = useState(null);

    function login(name)
    {
        setuserName(name);
    }

    function logout()
    {
        setuserName(null);
    }

    return (
        <UserContext.Provider value={{username, login , logout}}>
            {children}
        </UserContext.Provider>
    )
}