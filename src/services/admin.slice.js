import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authApi from '../api/authApi';

const initialState = {
    loading: true,
    error: '',
    profile: '',
    data: false,
    isAdmin:false,
}

export const getProfile = createAsyncThunk("get-admin-profile", async () => {
    try {
        const data = await authApi.get("/api/user/profile")
        return data
    }
    catch (error) {
        return error
    }
});

export const updateAdminProfile = createAsyncThunk("update-admin-profile", async (values) => {
    try {
        const data = await authApi.put("/api/user/profile",values)
        return data
    }
    catch (error) {
        return error
    }
});



const adminProfileSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProfile.pending, (state) => {
                state.loading = true
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                state.loading = false
                if (action?.payload?.response?.status >= 400) {
                    state.profile =action?.payload
                    state.error = action?.payload?.response?.data?.message ? action?.payload?.response?.data?.message : action?.payload?.message
                    state.data = false
                    state.isAdmin=false
                }
                else {
                    state.isAdmin=action.payload.data?.data?.isAdmin
                    state.profile = action?.payload?.data
                    state.data = true
                }
            })
            .addCase(getProfile.rejected, (state, action) => {
                state.loading = false
                state.error = action?.payload?.response?.data?.message ? action?.payload?.response?.data?.message : action?.payload?.message
                state.data = false
            })

            .addCase(updateAdminProfile.pending, (state) => {
                state.loading = true
            })
            .addCase(updateAdminProfile.fulfilled, (state, action) => {
                state.loading = false
                if (action?.payload?.response?.status >= 400) {
                    state.error = action?.payload?.response?.data?.message ? action?.payload?.response?.data?.message : action?.payload?.message
                    // toast.error(action?.payload?.response?.data?.message ? action?.payload?.response?.data?.message : action?.payload?.message, {
                    //     autoClose: 1000
                    // })
                }
                else {
                    state.profile = action?.payload?.data
                }
            })
            .addCase(updateAdminProfile.rejected, (state, action) => {
                state.loading = false
                state.error = action?.payload?.response?.data?.message ? action?.payload?.response?.data?.message : action?.payload?.message
            })
    }
})

export const { reset } = adminProfileSlice.actions;
export default adminProfileSlice.reducer;