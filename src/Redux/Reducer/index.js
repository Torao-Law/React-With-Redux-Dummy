import {combineReducers} from "redux"

// initialize a reduce
const ListReducer = (state=[], action) => {
    if(action.type === "LIST_DATA") {
        return action.data
    }

    return state;
}   

const ProductSelectedReducer = (selected=null, action) => {
    if(action.type === "PRODUCT_SELECTED") {
        return action.data
    }
    return selected
}

export default combineReducers({
    ListProduct: ListReducer,
    Selected: ProductSelectedReducer
})