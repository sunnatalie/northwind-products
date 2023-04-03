import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import Product from "./models/Product";

interface ProductState {
    products:Product[],
    product?:Product
}

const initialstate:ProductState = {
    products: [],
}

export const productSlice = createSlice({
    name:'products',
    initialState:initialstate,
    reducers:{
        setProducts:(state,{payload:products}:PayloadAction<Product[]>) => { //in action, there's type and payload
            // redux toolkit allows us to write "mutating" logic in the reducers
            // does not actually mutate the state. It uses the Immer library which detects changes inside the "Draft state" and produces a brand new state
            
            
            // state.products = action.payload;
            state.products = products;
        },
        setProduct:(state,action:PayloadAction<Product>) => {
            const {payload} = action; //payload === product

            state.product = payload;
        },
        addProduct:(state,{payload:product}:PayloadAction<Product>) => {

            state.products.push(product);
        },
        updateProduct:(state,{payload:product}:PayloadAction<Product>) => {
            const indexToUpdate = state.products.findIndex((p) => p.id === product.id);

            if(indexToUpdate >= 0){
                state.products[indexToUpdate] = product;
            }

            state.product = product;
        },
        deleteProduct:(state,{payload:id}:PayloadAction<number>) => {
            const indexToDelete = state.products.findIndex((p) => p.id === id);
            if(indexToDelete >= 0){
                state.products.splice(indexToDelete,1);
            }

        }
    }
});

// destructuring setProducts. Action creators are generated for each case reducer function
export const { setProducts,addProduct,updateProduct,deleteProduct,setProduct } = productSlice.actions;
export default productSlice.reducer;