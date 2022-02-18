import { Component, useState } from "react";

import "./header-menu.scss";

const HeaderMenu = ({ items }) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const elements = items.map(({ id, link, text }, index) => {
        const fullClassName = (index === activeIndex) ? "header-menu-link active" : "header-menu-link"
        return (
            <li key={id}>
                <a href={link} onClick={()=> setActiveIndex(index)} className={fullClassName}>{text}</a>
            </li>
        )
    });

    return (
        <ul className="header-menu">
            {elements}
        </ul>
    )
}

// class HeaderMenu extends Component {
//     state = {
//         activeIndex: 0
//     }

//     handleClick = (idx) => {
//         this.setState({
//             activeIndex: idx
//         })
//     }

//     render() {
//         const { props, handleClick } = this;
//         const { activeIndex } = this.state;

//         const elements = props.items.map(({ id, link, text }, index) => {
//             const fullClassName = (index === activeIndex) ? "header-menu-link active" : "header-menu-link"
//             return (
//                 <li key={id}>
//                     <a href={link} onClick={() => handleClick(index)} className={fullClassName}>{text}</a>
//                 </li>
//             )
//         });

//         return (
//             <ul className="header-menu">
//                 {elements}
//             </ul>
//         )
//     }
// }


export default HeaderMenu;