import PropTypes from "prop-types";

import ListItem from "./ListItem";

import "./list.css";

const List = ({title, items})=> {
    const elements = items.map(item => <ListItem key={item.id} text={item.text} />);
    return (
        <div>
            {/* {title ? <h2 className="list-title">{title}</h2> : ""} */}
            {title && <h2 className="list-title">{title}</h2>}
            <ul className="list">
                {elements}
                {/* <li>- Ланнистеры</li>
                <li>- Грейджои</li> */}
            </ul>
        </div>
    )
}

export default List;

List.defaultProps = {
    items: []
}

List.propTypes = {
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }))
}