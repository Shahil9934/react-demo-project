import { createSlice } from "@reduxjs/toolkit";

const ProductsSlice = createSlice({

    name : "products",
    initialState : {
      data : []
    },

    reducers : {

          setProducts(state,action){
           state.data = action.payload
          }
    }
})


export const {setProducts} = ProductsSlice.actions

export default ProductsSlice.reducer;


export const getProducts = () => {
    try {

        return async function(dispatch,getState){
            const productResponse = await fetch("https://fakestoreapi.com/products")
            const productJson = await productResponse.json()
             dispatch(setProducts(productJson))
         }
        
    } catch (error) {
        console.log("error",error)
    }
   
}