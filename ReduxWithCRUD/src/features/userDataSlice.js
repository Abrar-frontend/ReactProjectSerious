import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

// this createAsyncThunk function is create for pushing data in database by use mockapi.
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
            return result
        }catch (error){
          return rejectWithValue(error)
        }
    }
)

//Now I create get data requst by using createAsyncThunk function

export const getAllusers = createAsyncThunk('getUsers', async ( data, rejectWithValue ) => {
    const response = fetch("https://65acbff2adbd5aa31bdf8004.mockapi.io/first")
    try{
     const result  = await (await response).json()
     console.log(result)
    //  console.log(users,"checked in there")
     return result
    }catch(error){
        return rejectWithValue(error)
    }
})

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
        },
        
        // getAllusers

        [getAllusers.pending] : (state) => {
            state.loading = true
        },
        [getAllusers.fulfilled] : (state,action) => {
            state.loading = false,
            state.users = action.payload
        },
        [getAllusers.rejected] : (state,action) => {
            state.loading = false,
            state.error = action.payload.message
        }
     }
    }

})

export default userSlice.reducer;