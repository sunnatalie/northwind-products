import { configureStore } from "@reduxjs/toolkit";
import productsReducer from '../components/ProductsArea/productsSlice';
import authReducer from "../auth/authSlice";

const store = configureStore({ //The configureStore function takes a configuration object as its argument, which includes a reducer field. The reducer field is an object that maps keys to slices of the Redux state, and in this case, it defines a productsState slice with an initial state object of { name: 'oded', age: 35 }.
    reducer:{
        productsState: productsReducer,
        authState: authReducer
    }
});

// infer the "rootstate" and "appdispatch" types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;