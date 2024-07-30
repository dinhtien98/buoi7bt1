import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState={
    cats:[],
    currentPage:1,
    status:"start",
    error:"",
}
const url="https://66a7ab4f53c13f22a3d0a928.mockapi.io/Quiz"
export const fetchCats=createAsyncThunk('cats/fetchCats', async()=>{
    const res = await axios.get(url)
    return res.data
})
export const deleteCat=createAsyncThunk('cats/deleteCat', async (id)=>{
    await axios.delete(url+"/"+id)
    return id
})
export const addNewCat=createAsyncThunk('cats/addNewCat', async (cat)=>{
    const res = await axios.post(url,cat)
    return res.data
})
const catsSlice=createSlice({
    name:"cats",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchCats.pending,state=>{
            state.status="loading"
        })
        .addCase(fetchCats.fulfilled,(state,action)=>{
            state.status="succeeded"
            state.cats=action.payload
        })
        .addCase(fetchCats.rejected,(state,action)=>{
            state.status="failed"
            state.error=action.error.message
        })
        .addCase(deleteCat.fulfilled,(state,action)=>{
            state.cats=state.cats.filter(item=>item.id!==action.payload)
        })
        .addCase(addNewCat.fulfilled,(state,action)=>{
            state.cats.push(action.payload)
        })
    }
})
export default catsSlice.reducer