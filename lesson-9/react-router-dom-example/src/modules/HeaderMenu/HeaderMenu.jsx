import { NavLink } from "react-router-dom";

import "./header-menu.css";

const getLinkClassName = ({isActive}) => isActive ? "header-menu-link link-active" : "header-menu-link";

const HeaderMenu = () => {

    return (
        <ul className="header-menu">
            <li>
                <NavLink className={getLinkClassName} to="/">Home</NavLink>
            </li>
            <li>
                <NavLink className={getLinkClassName} to="/posts-search">Posts Search</NavLink>
            </li>
            <li>
                <NavLink className={getLinkClassName} to="/my-books">My books</NavLink>
            </li>
            <li>
                <NavLink className={getLinkClassName} to="/contacts">Contacts</NavLink>
            </li>
        </ul>
    )
}

export default HeaderMenu;