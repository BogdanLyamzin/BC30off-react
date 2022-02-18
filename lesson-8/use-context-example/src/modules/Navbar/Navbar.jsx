import useLang from "../../shared/hooks/useLang";

import LanguageSwitcher from "../LanguageSwitcher"

import styles from "./Navbar.module.css";

import local from "./local.json"

const Navbar = ()=> {
    const {lang} = useLang()
    return (
        <nav className={styles.navbar}>
            <a href="">Logo</a>
            <div>{local["main-menu"][lang]}</div>
            <LanguageSwitcher />
        </nav>
    )
}

export default Navbar;