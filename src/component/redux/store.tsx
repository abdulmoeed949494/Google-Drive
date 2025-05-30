 import { configureStore } from "@reduxjs/toolkit";
 import globalSlice from "./slices/index";


 export const store = configureStore({
    reducer: {
        global: globalSlice,
    }
 })

 export type RootState = ReturnType<typeof store.getState>;
 export type AppDispatch = typeof store.dispatch;