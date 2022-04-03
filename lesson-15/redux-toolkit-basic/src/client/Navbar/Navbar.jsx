import { Link } from "react-router-dom";

import NavbarMenu from "./NavbarMenu";
import Logout from "./Logout";

import styles from "./navbar.module.scss";

const Navbar = ()=> {
    return (
        <nav className={styles.navbar}>
            <div className="container">
                <div className={styles.row}>
                    <Link to="/">Logo</Link>
                    <NavbarMenu />
                    <Logout />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;