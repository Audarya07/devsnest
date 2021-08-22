import React, {useContext} from 'react';
import Context from "../context/AuthContext";


const About = () => {
    const logger = useContext(Context);

    return(
        <div>
            <h1>About</h1>
            <div>{logger.loggedIn ? 
            'You are Logged In':
            'You are Logged Out'}</div>
        </div>
    )
}

export default About;