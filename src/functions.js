export const textCountCart = (cart) => {
    if(cart.length > 1 && cart.length < 5)
        return `${cart.length} товара`
    if(cart.length > 1 && cart.length >= 5)
        return `${cart.length} товаров`
    return `${cart.length} товар`
}
