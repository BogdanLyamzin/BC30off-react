import { Link } from "react-router-dom";

import {useLocation} from "react-router-dom";

import styles from "./post-list.module.css";

const PostList = ({posts})=> {
    const location = useLocation();
    const elements = posts.map(item => (
        <Link state={{from: location}} key={item.id} className={styles.link} to={`/posts/${item.id}`}>
            <li className={styles.item} >
                <h4>{item.title}</h4>
                <p>{item.body}</p>
            </li>
        </Link>
    ));

    return (
        <ul className={styles.list}>
            {elements}
        </ul>
    )
}

export default PostList;