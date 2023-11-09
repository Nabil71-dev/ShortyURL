import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authApi from '../api/authApi';
// import { toast } from 'react-toastify';

const initialState = {
    loading: true,
    error: '',
    allUrls: {},
}

export const getAllUrls = createAsyncThunk("get-all-urls", async (page) => {
    try {
        const value = await authApi.get(`/api/url/admin/all-urls?page=${page}&limit=10`)
        return value
    }
    catch (error) {
        return error
    }
});

const allUrlSlice = createSlice({
    name: 'allUrls',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllUrls.pending, (state) => {
                state.loading = true
            })
            .addCase(getAllUrls.fulfilled, (state, action) => {
                state.loading = false
                if (action?.payload?.response?.status >= 400) {
                    state.error = action?.payload?.response?.data?.message ? action?.payload?.response?.data?.message : action?.payload?.message
                }
                else {
                    state.allUrls = action?.payload?.data
                }
            })
            .addCase(getAllUrls.rejected, (state, action) => {
                state.loading = false
                state.error = action?.payload?.response?.response?.data?.message
            })
    }
})

export const { reset } = allUrlSlice.actions;
export default allUrlSlice.reducer;