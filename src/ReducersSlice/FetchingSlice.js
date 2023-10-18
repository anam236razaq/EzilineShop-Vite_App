import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: [],
    status: "loading",
}

const fetchingSlice = createSlice({
    name: "fetchingData",
    initialState,
    reducers: {
        dataReceived(state, action) {
            state.products = action.payload;
            state.status = "ready";
        },
        dataFailed(state) {
            state.status = "error";
        },
    },
});

export const { dataReceived, dataFailed } = fetchingSlice.actions;

export default fetchingSlice.reducer