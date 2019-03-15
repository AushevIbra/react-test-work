export const deleteItem = (data) => {

    return (dispatch) => {
        dispatch({
            type: "CART_DELETE_ITEM",
            payload: data,

        })
    }
};