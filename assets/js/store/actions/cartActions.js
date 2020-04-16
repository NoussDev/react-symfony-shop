export const addProductToCart = (id, picture, title, price, quantity) => {
    return {
        type: "ADD",
        payload: {
            id,
            picture,
            title,
            price,
            quantity
        }
    }
}

export const deleteProductToCart = (id) => {
    return {
        type: "DELETE",
        payload: {
            id
        }
    }
}