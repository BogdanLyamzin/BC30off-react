export const getCart = ({cart}) => cart.items;

export const getCartCount = ({cart}) => cart.items.length;

export const getCartTotalPrice = ({cart}) => cart.items.reduce((acum, item)=> acum + item.price, 0)