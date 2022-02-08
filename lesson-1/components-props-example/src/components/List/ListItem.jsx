import PropTypes from "prop-types";
const ListItem = ({text}) => {
    return <li key={text}>- {text}</li>
}

export default ListItem;

ListItem.propTypes = {
    text: PropTypes.string.isRequired
}