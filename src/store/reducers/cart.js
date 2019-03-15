const initialState = {
    items: []
}

const cart = (state = initialState, action) => {
    switch(action.type) {
        case "CART_GET":
            return state;

        case "ADD_CART":
            return {
                ...state,
                items:  state.items.concat(action.payload)
            }
        case "CART_DELETE_ITEM":
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            }

        default:
            return state
    }
}

export default cart