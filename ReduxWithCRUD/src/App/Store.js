import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "../features/userDataSlice";

const store = configureStore({
  reducer : {app : userSlice}
})

export {store}