import React, {createContext, useState} from 'react';

const Context = createContext();

export default Context;

const wait = (time) => {
    return new Promise((res) => {
        setTimeout(res, time)
    })
}

export const AuthContext  = ({children}) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);
    const logger = {
        loggedIn: loggedIn,
        loading: loading,
        login: () => {
            setLoading(true);
            wait(1000).then(() => {
                setLoggedIn(true)
                setLoading(false)
              }
            );
        },
        logout: () => {
            setLoading(true);
            wait(1000).then(() => {
                setLoggedIn(false)
                setLoading(false)
              }
            );
        }
    }

    return(
        <Context.Provider value={logger}>
            {children}
        </Context.Provider>
    )
}

// export default AuthContext;