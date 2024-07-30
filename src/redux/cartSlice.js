import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        item:[],
    },
    reducers:{
        addItem:(state,action)=>{
            const index = state.item.findIndex(item=>item.id==action.payload.id)
            if(index>=0){
                state.item[index].quatity++;
            }else{
                state.item=([...state.item,{...action.payload,quatity:1}])
            }
            console.log(state.item)
        },
        removeItem:(state,action)=>{
            console.log(action.payload)
            state.item=state.item.filter(item=>item.id!==action.payload)
        }
    }
})
export const {addItem,removeItem} = cartSlice.actions
export default cartSlice.reducer