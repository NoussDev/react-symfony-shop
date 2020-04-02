const defaultState = {
    product: {
        id: "",
        picture:"",
        title: "",
        price:0
    }
}


const cart = (state = defaultState, action) => {
    switch(action.type){
        case "ADD":
            return [
                ...state,
                {product:action.payload}
            ]
        case "DELETE":
            var newState = state.filter(tab => tab.product.id !== action.payload.id)
            return [...newState]
        default:
            return [state]
    }
}

export default cart