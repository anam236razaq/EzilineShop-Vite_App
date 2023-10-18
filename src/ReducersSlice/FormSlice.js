import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "",
    lastname: "",
    address: "",
    phoneNo: "",
    password: "",
    message: "",
    email: "",
}

const formSlice = createSlice({
    name: "formSlice",
    initialState,
    reducers: {
        username(state, action) {
            state.username = action.payload;
        },
        lastname(state, action) {
            state.lastname = action.payload;
        },
        address(state, action) {
            state.address = action.payload
        },
        phoneNo(state, action) {
            state.phoneNo = action.payload
        },
        password(state, action) {
            state.password = action.payload;
        },
        message(state, action) {
            state.message = action.payload;
        },
        resetForm(state) {
            state.username = "";
            state.password = "";
        },
        resetCheckoutForm(state) {
            state.username = "";
            state.lastname = "";
            state.address = "";
            state.phoneNo = "";
        },
        email(state, action) {
            state.email = action.payload;
        },
        resetEmail(state) {
            state.email = "";
        }
    }
})
export const { username, password, message, resetForm, lastname, address, phoneNo, resetCheckoutForm,
    resetEmail, email } = formSlice.actions
export default formSlice.reducer;