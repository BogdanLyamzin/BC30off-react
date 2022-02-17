import styles from "./post-list.module.css";

const PostList = ({posts, handleClick})=> {
    const elements = posts.map(item => (
        <li className={styles.item} key={item.id} onClick={()=> handleClick(item)}>
            <h4>{item.title}</h4>
            <p>{item.body}</p>
        </li>
    ));

    return (
        <ul className={styles.list}>
            {elements}
        </ul>
    )
}

export default PostList;