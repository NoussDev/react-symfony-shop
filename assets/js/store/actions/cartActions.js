export const addProductToCart = (id, picture, title, price) => {
    return {
        type: "ADD",
        payload: {
            id,
            picture,
            title,
            price
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