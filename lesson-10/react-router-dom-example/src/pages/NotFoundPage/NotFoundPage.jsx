import { Link } from "react-router-dom";

const NotFoundPage = ()=> {
    return (
        <div>
            <p>Страница не найдена</p>
            <Link to="/">На главную</Link>
        </div>
    )
}

export default NotFoundPage;