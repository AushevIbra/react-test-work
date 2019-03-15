const initialState = {
    items: [
        {
            id: 1,
            title: "Супер товар",
            rating: 2.87,
            trand: "-",
            currency: "₽₽₽",
            reviews: 0,
            checked: false

        },
        {
            id: 2,
            title: "Супер пупер товар",
            rating: 2.3,
            trand: "+14",
            currency: "₽₽₽",
            reviews: 5,
            checked: false

        }
    ]
}

const ordersReducer = (state = initialState, action) => {
    switch(action.type) {
        case "PRODUCTS_GET":
            return {
                ...state,
                items: action.payload
            }
        case "PRODUCTS_TOGGLE":
           state.items.map((item, key) => { if(action.payload == item.id){state.items[key].checked = !state.items[key].checked} })

        default:
            return state
    }
}

export default ordersReducer