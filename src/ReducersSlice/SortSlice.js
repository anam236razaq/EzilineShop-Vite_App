import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    gridview: false,
    sortValue: "default",
    products: [],
    filterCategory: "Web Application",
    filterServices: "Web Development",
    filterCourses: "Web Designing & Development",
    filterFYP: "Web Apps",
    filterHardware: "Printers",
    filterTechnology: "",
}

const sortSlice = createSlice({
    name: "sortSlice",
    initialState,
    reducers: {
        gridView(state, action) {
            state.gridview = action.payload;
        },
        sorting(state, action) {
            state.sortValue = action.payload;
        },
        sortProducts(state, action) {
            const { products, sortValue } = action.payload;

            let sortedProducts = [...products];

            if (sortValue == "default") {
                sortedProducts;
            } else if (sortValue === "popularity") {
                sortedProducts.sort((a, b) => a.popularity - b.popularity);
            } else if (sortValue === "latest") {
                sortedProducts.sort((a, b) => new Date(a.date) - new Date(b.date));
            } else if (sortValue === "lowest price") {
                sortedProducts.sort((a, b) => a.price - b.price);
            } else if (sortValue === "highest price") {
                sortedProducts.sort((a, b) => b.price - a.price);
            }
            state.products = sortedProducts;
        },
        filterCategory(state, action) {
            state.filterCategory = action.payload;
        },
        filterServices(state, action) {
            state.filterServices = action.payload;
        },
        filterCourses(state, action) {
            state.filterCourses = action.payload;
        },
        filterFYP(state, action) {
            state.filterFYP = action.payload;
        },
        filterHardware(state, action) {
            state.filterHardware = action.payload;
        },
        filterTechnology(state, action) {
            state.filterTechnology = action.payload;
        }
    }
})

export const { gridView, sorting, sortProducts, filterCategory, filterServices, filterCourses, filterFYP, filterHardware, filterTechnology } = sortSlice.actions;

export default sortSlice.reducer;