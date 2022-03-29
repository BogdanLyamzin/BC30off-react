import {memo} from "react";
import { Link } from "react-router-dom";

import styles from "../product-list.module.scss";

const ProductListItem = ({id, name, price})=> {
    return (
        <Link className={styles.link} to={`/products/${id}`}>
        <li className={styles.item} >
            <h4>{name}</h4>
            <p>Price: {price}</p>
        </li>
    </Link>
    )
}

export default memo(ProductListItem);