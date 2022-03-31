import { useSelector, shallowEqual } from "react-redux";

const Cart = ()=> {
    const cart = useSelector(state => state.cart, shallowEqual)
    return (
        <span>Cart {Boolean(cart.length) && cart.length}</span>
    )
}

export default Cart;