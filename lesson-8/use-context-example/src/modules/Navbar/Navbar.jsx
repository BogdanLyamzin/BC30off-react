import LanguageSwitcher from "../LanguageSwitcher"

import styles from "./Navbar.module.css";

const Navbar = ()=> {
    return (
        <nav className={styles.navbar}>
            <a href="">Logo</a>
            <div>Главное меню</div>
            <LanguageSwitcher />
        </nav>
    )
}

export default Navbar;