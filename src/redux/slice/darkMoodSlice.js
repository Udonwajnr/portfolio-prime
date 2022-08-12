import { createSlice } from "@reduxjs/toolkit";

export const darkMoodSlice = createSlice({
    name:'darkMood',
    initialState:{
        value:false
    },
    reducers:{
        darkMood:(state)=>{
            state.value =true
        },
        lightMood:(state)=>{
            state.value = false
        }
    }
})


export const {darkMood,lightMood} = darkMoodSlice.actions

export default darkMoodSlice.reducer