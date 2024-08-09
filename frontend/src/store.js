import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk' 
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailsReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'


const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
})

// this makes it so when you return back to the website your items in your cart will still be present 1
const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []



const initialState = {
    // 1
    cart:{cartItems:cartItemsFromStorage}
}

const middleware = [thunk]

const store = createStore(reducer,initialState, 
    composeWithDevTools(applyMiddleware(...middleware)))

export default store

