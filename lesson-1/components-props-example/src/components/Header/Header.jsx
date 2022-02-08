import HeaderMenu from "./HeaderMenu";

import logo from "./logo.png"

export const arr = [];
export const str = "";

const Header = ()=> {
    return (
      <header>
        <a href="#">
          <img src={logo} />
        </a>
        <HeaderMenu />
        <span>Корзина</span>
      </header>
    )
  }

export default Header;