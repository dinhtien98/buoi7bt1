import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


const initialState={
    item:[],
    status:'start',
    error:null
}

export const fetchData = createAsyncThunk('products/fetData', async ()=>{
    const res = await axios.get('https://66a7ab4f53c13f22a3d0a928.mockapi.io/Shop')
    return res.data
})

const productsSlice=createSlice({
    name:'products',
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(fetchData.pending,(state)=>{
            state.status="loading"
        })
        .addCase(fetchData.fulfilled,(state,action)=>{
            state.status="succeeded"
            state.item=action.payload
        })
        .addCase(fetchData.rejected,(state,action)=>{
            state.status="failed"
            state.error=action.error.message
        })
    }
})
export default productsSlice.reducer