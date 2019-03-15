export const toggleChecked = (data) => {
    //console.log(data)
    return (dispatch) => {
        dispatch({
            type: "PRODUCTS_TOGGLE",
            payload: data,

        })
    }
};