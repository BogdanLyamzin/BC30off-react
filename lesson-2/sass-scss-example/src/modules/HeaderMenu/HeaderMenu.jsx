import "./header-menu.css";

const HeaderMenu = ({ items }) => {
    const elements = items.map(({ id, link, text }, index) => {
        const fullClassName = (index === 0) ? "header-menu-link active" : "header-menu-link"
        return (
            <li key={id}>
                <a href={link} className={fullClassName}>{text}</a>
            </li>
        )
    });

    return (
        <ul className="header-menu">
            {elements}
        </ul>
    )
}

export default HeaderMenu;