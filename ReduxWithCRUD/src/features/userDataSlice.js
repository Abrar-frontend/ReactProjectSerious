import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
    users : [],
    loading : false,
    error : null
}

export const userSlice = createSlice({
    name : 'userData',
    initialState,
    reducers : {

    }

})

export default userSlice.reducer;