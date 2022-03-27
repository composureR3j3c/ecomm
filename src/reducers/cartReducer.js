const initData={
    cartItems:[]
}

function CartReducer(state=initData,action){
    switch(action.type){
        case 'ADD_TO_CART': return {
            ...state,
            cartItems:[...state.cartItems,action.payload]
        }
        case 'DELETE_FROM_CART': return{
            ...state,
            cartItems:[...state.cartItems.filter((item)=>item!=action.payload)]
        }
    }
    return state;
}

export default CartReducer;