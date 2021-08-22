import React, {useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import Context from "../context/AuthContext";


const Dashboard = () => {
    const logger = useContext(Context);
    return(
        <div>
            <Route>
                {
                    logger.loggedIn ? <h1>Welcome to Dashboard</h1> : 
                    <Redirect to='/' />
                }
            </Route>
        </div>
    )
}

export default Dashboard;