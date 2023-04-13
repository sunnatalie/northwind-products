import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../models/User";
import { AUTH_LOGIN_SESSION_STORAGE_KEY } from "../config";
import { handleToken, setInitialAuthState } from "./utils";

export interface AuthState {
    user: User | null;
    token: string | null;
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: setInitialAuthState(),
    reducers: {
        register:(state,{ payload:token }:PayloadAction<string>) => { //within action there's type and payload. register is async
            console.log('this is the registered state');
            handleToken(state,token);
        },
        login:(state,{payload:token}:PayloadAction<string>) => { //the type is entered authomatically
            //save token
            handleToken(state,token);
        },
        logout:(state) => {
            //remove token
            state.token = null;
            state.user = null;
            sessionStorage.removeItem(AUTH_LOGIN_SESSION_STORAGE_KEY);
        }
    }
})

// export the action creators
export const { register, login, logout } = authSlice.actions;

export default authSlice.reducer;