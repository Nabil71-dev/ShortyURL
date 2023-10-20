import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authApi from '../api/authApi';
// import { toast } from 'react-toastify';

const initialState = {
    loading: true,
    error: '',
    urls: [],
}

export const getUrls = createAsyncThunk("get-urls", async () => {
    try {
        const data = await authApi.get("/api/url/user/url-lists")
        return data
    }
    catch (error) {
        return error
    }
});

export const deleteUrls = createAsyncThunk("delete-urls", async ({id,reload,setReload}) => {
    // console.log(id,reload,setReload)
    try {
        const data = await authApi.delete(`/api/url/user/${id}`)
        setReload(!reload)
        return data
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
                state.error = action?.payload?.response?.data?.message ? action?.payload?.response?.data?.message : action?.payload?.message
            })

            .addCase(deleteUrls.pending, (state) => {
                state.loading = true
            })
            .addCase(deleteUrls.fulfilled, (state, action) => {
                state.loading = false
                if (action?.payload?.response?.status >= 400) {
                    // toast.error(action?.payload?.response?.data?.message ? action?.payload?.response?.data?.message : action?.payload?.message, {
                    //     autoClose: 1000
                    // })
                }
                else {
                    state.urls.data = state?.urls?.data.filter(
                        (item) => item.urlID !== action?.payload?.data?.data?.urlID
                    );
                    
                }
            })
            .addCase(deleteUrls.rejected, (state, action) => {
                state.loading = false
                // toast.error(action?.payload?.response?.data?.message ? action?.payload?.response?.data?.message : action?.payload?.message, {
                //     autoClose: 1000
                // })
            })
    }
})

export const { reset } = urlSlice.actions;
export default urlSlice.reducer;