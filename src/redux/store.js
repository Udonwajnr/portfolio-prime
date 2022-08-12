import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./slice/toggleSlice";
import darkMoodReducer from "./slice/darkMoodSlice"
export default configureStore({
    reducer:{
        toggle:toggleReducer,
        darkMood:darkMoodReducer
    }
})