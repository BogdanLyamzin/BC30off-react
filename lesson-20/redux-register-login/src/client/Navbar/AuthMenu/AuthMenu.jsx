import { Link } from "react-router-dom";

const AuthMenu = ()=> {
    return (
        <div>
            <Link to="/signup">Register</Link>
            /
            <Link to="/login">Login</Link>
        </div>
    )
};

export default AuthMenu;