import PropTypes from 'prop-types';

import "./button.css";

const Button = ({text, type})=> {
    // console.log(props)
    const fullClassName = `btn ${type === "submit" ? "btn-submit": ""}`
    return <button className={fullClassName} type={type}>{text}</button>
    // return <button type={props.type}>{props.text}</button>
  }

  export default Button

  Button.defaultProps = {
    type: "button"
  }

  Button.propTypes = {
    text: PropTypes.string.isRequired,
    type:  PropTypes.oneOf(['button', 'reset', "submit"])
  }