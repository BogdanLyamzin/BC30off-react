import { Component } from "react";

import "./header-menu.scss";

class HeaderMenu extends Component {
    state = {
        activeIndex: 0
    }
    
    handleClick = (idx) => {
        this.setState({
            activeIndex: idx
        })
    }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         activeIndex: 0
    //     };
    //     this.handleClick = this.handleClick.bind(this);
    // }

    // handleClick(idx) {
    //     this.setState({
    //         activeIndex: idx
    //     })
    // }

    render() {
        const { props, handleClick } = this;
        const { activeIndex } = this.state;

        const elements = props.items.map(({ id, link, text }, index) => {
            const fullClassName = (index === activeIndex) ? "header-menu-link active" : "header-menu-link"
            return (
                <li key={id}>
                    <a href={link} onClick={() => handleClick(index)} className={fullClassName}>{text}</a>
                </li>
            )
        });

        return (
            <ul className="header-menu">
                {elements}
            </ul>
        )
    }
}


export default HeaderMenu;