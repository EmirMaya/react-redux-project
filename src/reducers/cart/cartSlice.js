import { createSlice } from "@reduxjs/toolkit";
// createSlice crea el estadio inicial del estado

const initialState = {
    totalCount: 0,
    productsList: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addProductToCart: (state, action) => {
            state.productsList = [...state.productsList, action.payload]; //trae los productos que tengo y agrega otro con action
            state.totalCount += 1;
        },
        removeProductFromCart: (state, action) => {
            const productId = action.payload; //traigo el id del product
            state.totalCount -=1; //resto 1 al total del cart
            state.productsList = state.productsList.filter(prod => prod.id !== productId);
        }
    }
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;

export default cartSlice.reducer;