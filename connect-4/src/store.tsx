import { configureStore } from "@reduxjs/toolkit";
import  boardSlice  from "./reducers/boardSlice";
// import itemSlice from "./reducers/itemSlice";

const store = configureStore({
  reducer: {
        board: boardSlice,
  }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;