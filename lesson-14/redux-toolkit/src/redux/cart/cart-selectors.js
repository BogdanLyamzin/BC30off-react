export const getCart = state => state.cart;

export const getCartCount = state => state.cart.length;

export const getCartTotalPrice = ({cart}) => cart.reduce((acum, item)=> acum + item.price, 0)