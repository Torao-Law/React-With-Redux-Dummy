// create ActionCreator
export const ambilData = () => {
    // dummy data, ideally use fetching data from request api.
    const ListData = [
        {id: 1, product: "Cheesecake", price: 599000, stock: 50},
        {id: 2, product: "Lamington", price: 499000, stock: 50},
        {id: 3, product: "Kaiserschmarrn", price: 399000, stock: 50},
        {id: 4, product: "Ma Lai Go", price: 299000, stock: 50},
        {id: 5, product: "Lapis Legit", price: 199000, stock: 50},
    ]

    // action
    return {
        type: "LIST_DATA",
        data: ListData,
    }
}


export const ProductSelected = (product) => {
    return {
        type: "PRODUCT_SELECTED",
        data: product
    }
}