import { useSelector, shallowEqual } from "react-redux";

import { getCartCount } from "../../../redux/cart/cart-selectors";

const Cart = ()=> {
    const count = useSelector(getCartCount, shallowEqual)
    return (
        <span>Cart {Boolean(count) && count}</span>
    )
}

export default Cart;