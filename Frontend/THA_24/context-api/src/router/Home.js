import { useContext } from "react";
import Context from "../context/AuthContext";

const Home = () => {
    const logger = useContext(Context);

    return(
        <div>
            <h2>Home</h2>
            <div>Login to access Dashboard and Profile Page</div>
            {
                logger.loading ? "Loading...":
                   logger.loggedIn ?
                        <button onClick={logger.logout}>Logout</button>:
                        <button onClick={logger.login}>Login</button>
            }
        </div>
    )
}

export default Home;
