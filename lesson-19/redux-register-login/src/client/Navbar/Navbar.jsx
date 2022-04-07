import { useSelector, shallowEqual } from "react-redux";
import { Link } from "react-router-dom";

import NavbarMenu from "./NavbarMenu";
import UserInfo from "./UserInfo";
import AuthMenu from "./AuthMenu";

import { getIslogin } from "../../redux/auth/auth-selectors";

import styles from "./navbar.module.scss";

const Navbar = ()=> {
    const isLogin = useSelector(getIslogin, shallowEqual);

    return (
        <nav className={styles.navbar}>
            <div className="container">
                <div className={styles.row}>
                    <Link to="/">Logo</Link>
                    <NavbarMenu />
                    {isLogin ? <UserInfo /> : <AuthMenu />}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;