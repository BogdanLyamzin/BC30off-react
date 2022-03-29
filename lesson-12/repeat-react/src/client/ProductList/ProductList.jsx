import {memo} from "react";

import ProductListItem from "./ProductListItem";

import styles from "./product-list.module.scss";

const ProductList = ({items})=> {
    const elements = items.map(item => <ProductListItem key={item.id} {...item} />);

    return (
        <ul className={styles.list}>
            {elements}
        </ul>
    )
}

export default memo(ProductList);