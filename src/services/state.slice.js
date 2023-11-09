import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authApi from '../api/authApi';

const initialState = {
    loading: true,
    error: '',
    data: {},
}

export const getStates = createAsyncThunk("get-short-stats", async (id) => {
    try {
        const value = await authApi.get(`/api/user/state/${id}`)
        return value
    }
    catch (error) {
        return error
    }
});


const stateSlice = createSlice({
    name: 'stats',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getStates.pending, (state) => {
                state.loading = true
            })
            .addCase(getStates.fulfilled, (state, action) => {
                state.loading = false
                if (action?.payload?.response?.status >= 400) {
                    state.error = action?.payload?.response?.data?.message ? action?.payload?.response?.data?.message : action?.payload?.message
                }
                else {
                    state.data = action?.payload?.data
                }
            })
            .addCase(getStates.rejected, (state, action) => {
                state.loading = false
                state.error = action?.payload?.response?.response?.data?.message
            })
    }
})

export const { reset } = stateSlice.actions;
export default stateSlice.reducer;