import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authApi from '../api/authApi';
// import { toast } from 'react-toastify';

const initialState = {
    loading: true,
    error: '',
    urls: {},
}

export const getUrls = createAsyncThunk("get-urls", async (data) => {
    try {
        const value = await authApi.get(`/api/url/user/${data[1]}?page=${data[0]}&limit=10`)
        return value
    }
    catch (error) {
        return error
    }
});

export const createUrl = createAsyncThunk("create-urls", async (data) => {
    try {
        const value = await authApi.post(`/api/url/short-create`,data?.values)
        data?.close();
        return value
    }
    catch (error) {
        return error
    }
});


const urlSlice = createSlice({
    name: 'urls',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUrls.pending, (state) => {
                state.loading = true
            })
            .addCase(getUrls.fulfilled, (state, action) => {
                state.loading = false
                if (action?.payload?.response?.status >= 400) {
                    state.error = action?.payload?.response?.data?.message ? action?.payload?.response?.data?.message : action?.payload?.message
                }
                else {
                    state.urls = action?.payload?.data
                }
            })
            .addCase(getUrls.rejected, (state, action) => {
                state.loading = false
                state.error = action?.payload?.response?.response?.data?.message
            })

            .addCase(createUrl.pending, (state) => {
                state.loading = true
            })
            .addCase(createUrl.fulfilled, (state, action) => {
                state.loading = false
                if (action?.payload?.response?.status >= 400) {
                    state.error = action?.payload?.response?.data?.message ? action?.payload?.response?.data?.message : action?.payload?.message
                }
                else {
                    state.urls.data.push(action?.payload?.data?.data)
                }
            })
            .addCase(createUrl.rejected, (state, action) => {
                state.loading = false
                state.error = action?.payload?.response?.response?.data?.message
            })
    }
})

export const { reset } = urlSlice.actions;
export default urlSlice.reducer;