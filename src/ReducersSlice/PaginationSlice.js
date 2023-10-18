import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentPage: 1,
    itemsPerPage: 16,
    totalPages: 1,
}

const paginationSlice = createSlice({
    name: "paginationSlice",
    initialState,
    reducers: {
        nextPagination(state) {
            if (state.currentPage < state.totalPages) {
                state.currentPage += 1;
            }
        },
        prevPagination(state) {
            if (state.currentPage > 1) {
                state.currentPage -= 1;
            }
        },
        setTotalPages(state, action) {
            state.totalPages = action.payload
        }
    }
})

export const { nextPagination, prevPagination, setTotalPages } = paginationSlice.actions;
export default paginationSlice.reducer;