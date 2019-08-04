import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY } from './action-types';

//add to cart 
export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id
    }
}

//remove from cart
export const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        id
    }
}

//subtract qt action
export const subtractQuantity = (id) => {
    return {
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity = (id) => {
    return {
        type: ADD_QUANTITY,
        id
    }
}