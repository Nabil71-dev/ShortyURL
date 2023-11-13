import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authApi from '../api/authApi';
// import { toast } from 'react-toastify';

const initialState = {
    loading: true,
    error: '',
    profile: '',
    data: false,
}

export const getProfile = createAsyncThunk("get-profile", async () => {
    try {
        const data = await authApi.get("/api/user/profile")
        return data
    }
    catch (error) {
        return error
    }
});

// export const updateProfile = createAsyncThunk("update-profile", async (value) => {
//     try {
//         const data = await authApi.put("/api/user/profile", value.values)
//         value.func();
//         return data
//     }
//     catch (error) {
//         return error
//     }
// });

const userProfileSlice = createSlice({
    name: 'user',
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
                }
                else {
                    state.profile = action?.payload?.data
                    state.data = true
                }
            })
            .addCase(getProfile.rejected, (state, action) => {
                state.loading = false
                state.error = action?.payload?.response?.data?.message ? action?.payload?.response?.data?.message : action?.payload?.message
                state.data = false
            })


            // .addCase(updateProfile.pending, (state) => {
            //     state.loading = true
            // })
            // .addCase(updateProfile.fulfilled, (state, action) => {
            //     state.loading = false
            //     if (action?.payload?.response?.status >= 400) {
            //         state.error = action?.payload?.response?.data?.message ? action?.payload?.response?.data?.message : action?.payload?.message
            //         // toast.error(action?.payload?.response?.data?.message ? action?.payload?.response?.data?.message : action?.payload?.message, {
            //         //     autoClose: 1000
            //         // })
            //     }
            //     else {
            //         state.profile = action?.payload?.data
            //         // toast.success(action?.payload?.data?.message, {
            //         //     autoClose: 1000
            //         // })
            //     }
            // })
            // .addCase(updateProfile.rejected, (state, action) => {
            //     state.loading = false
            //     state.error = action?.payload?.response?.data?.message ? action?.payload?.response?.data?.message : action?.payload?.message
            // })
    }
})

export const { reset } = userProfileSlice.actions;
export default userProfileSlice.reducer;