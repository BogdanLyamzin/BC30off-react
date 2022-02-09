import PropTypes  from "prop-types";

import styles from "./header-menu.module.css";

const HeaderMenu = ({ items }) => {
    const elements = items.map(({ id, link, text }, index) => {
        const fullClassName = (index === 0) ? styles.activeLink : styles.link
        return (
            <li key={id}>
                <a href={link} className={fullClassName}>{text}</a>
            </li>
        )
    });

    return (
        <ul className={styles.menu}>
            {elements}
        </ul>
    )
}

export default HeaderMenu;

HeaderMenu.defaultProps = {
    items: []
}

HeaderMenu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }))
}