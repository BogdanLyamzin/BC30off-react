import {useSelector, useDispatch, shallowEqual} from "react-redux";

import actions from "../../redux/cart/cart-actions";
import { getCart } from "../../redux/cart/cart-selectors";

import styles from "./cart-list.module.scss";

const CartList = ()=> {
    const items = useSelector(getCart, shallowEqual);
    const dispatch = useDispatch();

    const removeFromCart = (id) => {
        dispatch(actions.remove(id));
    }

    const elements = items.map(item => (
        <li className={styles.item} key={item.id}>
            <p className={styles.name}>{item.name}</p>
            <p className={styles.price_container}>
                <span>Price: {item.price}</span>
                <button onClick={()=> removeFromCart(item.id)} className={styles.buy_button}>Remove</button>
            </p>
        </li>
    ))
    return (
        <ul className={styles.list}>
            {elements}
        </ul>
    )
}

export default CartList;