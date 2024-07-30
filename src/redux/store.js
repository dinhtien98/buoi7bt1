import {configureStore} from '@reduxjs/toolkit'
import productsSlice from './productsSlice'
import cartSlice from './cartSlice'
import catsSlice from './catsSlice'

const store=configureStore({
    reducer:{
        products:productsSlice,
        cart:cartSlice,
        cats:catsSlice
    }
})
export default store