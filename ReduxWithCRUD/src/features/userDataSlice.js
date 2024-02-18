import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk(
    "createUser",
    async (data , {rejectWithValue}) => {
        const response = fetch("https://65acbff2adbd5aa31bdf8004.mockapi.io/first",{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })

        try{
            const result = await response.json()
            return
        }catch (error){
          return rejectWithValue(error)
        }
    }
)

const initialState = {
    users : [],
    loading : false,
    error : null
}

export const userSlice = createSlice({
    name : 'userData',
    initialState,
    reducers : {
     extraReducers : {
        [createUser.pending]: (state) => {
            state.loading = true;
        },
        [createUser.fulfilled]: (state,action) => {
            state.loading = false;
            state.users.push(action.payload)
        },
        [createUser.rejected]: (state,action) => {
            state.loading = false;
            state.error = action.payload.message;
        }
     }
    }

})

export default userSlice.reducer;