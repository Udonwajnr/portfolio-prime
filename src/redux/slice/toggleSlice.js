import { createSlice } from "@reduxjs/toolkit";

export const toggleSlice = createSlice({
    name:'toggle',
    initialState:{
        value:false
    },
    reducers:{
        toggle: (state)=>{
            state.value = true
        },
        reset:(state)=>{
            state.value = false
        }

    }
})

export const {toggle,reset} = toggleSlice.actions

export default  toggleSlice.reducer