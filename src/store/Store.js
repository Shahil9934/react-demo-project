import { configureStore } from "@reduxjs/toolkit";
import Products from '../store/ProductsSlice'

const Store = configureStore({
    reducer : Products
})

export default Store;