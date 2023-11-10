import { configureStore } from "@reduxjs/toolkit";
// funcion que permite crear el store
// Reducers
import userReducer from '../reducers/user/userSlice';
import cartReducer from "../reducers/cart/cartSlice";


export default configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
    }
})