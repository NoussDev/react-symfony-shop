const defaultState = {
    product: {
        id: {},
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
        default:
            return [state]
    }
}

export default cart