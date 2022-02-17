import {Component} from "react";

import styles from "./toggle-button.module.css";

class ToggleButton extends Component {
    state = {
        isActive: false
    }

    handleClick = ()=> {
        this.setState(prevState => {
            const {isActive} = prevState;

            return {
                isActive: !isActive
            }
        })
    }

    render(){
        const {text} = this.props;
        const {isActive} = this.state;
        const {handleClick} = this;
        
        return (
            <button onClick={handleClick} className={isActive ? styles.btnActive : styles.btn}>{text}</button>
        )
    }
}

export default ToggleButton;
