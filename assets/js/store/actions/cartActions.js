export const addProductToCart = (id, title, price) => {
    return {
        type: "ADD",
        payload: {
            id,
            title,
            price
        }
    }
}