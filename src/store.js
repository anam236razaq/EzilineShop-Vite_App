import { configureStore } from "@reduxjs/toolkit";
import fetchingReducer from "./ReducersSlice/FetchingSlice";
import formReducer from "./ReducersSlice/FormSlice";
import paginationReducer from "./ReducersSlice/PaginationSlice";
import sortReducer from "./ReducersSlice/SortSlice";
import cartReducer from "./ReducersSlice/CartSlice";

const store = configureStore({
    reducer: {
        fetch: fetchingReducer,
        formdata: formReducer,
        pagination: paginationReducer,
        sort: sortReducer,
        cart: cartReducer,
    }
});

export default store