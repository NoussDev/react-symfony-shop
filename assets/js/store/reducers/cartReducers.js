const defaultState = {
    product: {
        id: "",
        picture:"",
        title: "",
        price:0,
        quantity: 1
    }
}


const cart = (state = defaultState, action) => {
    switch(action.type){
        case "ADD":
            let duplicate = state.filter(tab => tab.product.id === action.payload.id)
            if(duplicate.length > 0){
                return [
                        ...newState,
                        {
                            product:{
                                id: action.payload.id,
                                picture: action.payload.picture,
                                title: action.payload.title,
                                price: action.payload.price,
                                quantity: duplicate.length + 1
                            }
                        }
                    ]
            }
            return [
                ...state,
                {product:action.payload}
            ]
        case "DELETE":
            let newState = state.filter(tab => tab.product.id !== action.payload.id)
            return [...newState]
        default:
            return [state]
    }
}

export default cart