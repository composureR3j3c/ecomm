import {combineReducers} from 'redux'
import CartReducer from './cartReducer'
import ItemsReducer from './itemsReducer'

const rootReducer=combineReducers({
    itemsReducer:ItemsReducer,
    cartReducer:CartReducer
})

export default rootReducer;