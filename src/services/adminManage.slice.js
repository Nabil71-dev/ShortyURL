import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authApi from '../api/authApi';

const initialState = {
    loading: true,
    error: '',
    data: '',
}

export const createAdmins = createAsyncThunk("create-admins", async (values) => {
    try {
        const data = await authApi.post("/api/admin/create", values)
        return data
    }
    catch (error) {
        return error
    }
});

export const getAdmins = createAsyncThunk("get-admins", async () => {
    try {
        const data = await authApi.get("/api/admin/alladmins")
        return data
    }
    catch (error) {
        return error
    }
});

export const updateAdmin = createAsyncThunk("update/admins", async (value) => {
    try {
        const data = await authApi.put(`api/admin/update-user/${value.userID}`, value.values)
        return data
    }
    catch (error) {
        return error
    }
});

const adminMangeSlice = createSlice({
    name: 'adminmanage',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder

            //create admins
            .addCase(createAdmins.pending, (state) => {
                state.loading = true
            })
            .addCase(createAdmins.fulfilled, (state, action) => {
                state.loading = false
                if (action?.payload?.response?.status >= 400) {
                    // toast.error(action?.payload?.response?.data?.message ? action?.payload?.response?.data?.message : action?.payload?.message, {
                    //     autoClose: 2000
                    // })
                }
                else {
                    // toast.success(action?.payload?.data?.message, {
                    //     autoClose: 2000
                    // })
                }
            })
            .addCase(createAdmins.rejected, (state, action) => {
                state.loading = false
                // toast.error(action?.payload?.response?.data?.message ? action?.payload?.response?.data?.message : action?.payload?.message, {
                //     autoClose: 2000
                // })
            })


            //get admions
            .addCase(getAdmins.pending, (state) => {
                state.loading = true
            })
            .addCase(getAdmins.fulfilled, (state, action) => {
                state.loading = false
                if (action?.payload?.response?.status >= 400) {
                    state.error = action?.payload?.response?.data?.message ? action?.payload?.response?.data?.message : action?.payload?.message
                    state.data = ''
                }
                else {
                    state.data = action?.payload?.data
                }
            })
            .addCase(getAdmins.rejected, (state, action) => {
                state.loading = false
                state.error = action?.payload?.response?.data?.message ? action?.payload?.response?.data?.message : action?.payload?.message
                state.data = ''
            })

            //update admins
            .addCase(updateAdmin.pending, (state) => {
                state.loading = true
            })
            .addCase(updateAdmin.fulfilled, (state, action) => {
                state.loading = false
                if (action?.payload?.response?.status >= 400) {
                    // toast.error(action?.payload?.response?.data?.message ? action?.payload?.response?.data?.message : action?.payload?.message, {
                    //     autoClose: 2000
                    // })
                    state.data = ''
                }
                else {
                    // toast.success("Status update success", {
                    //     autoClose: 2000
                    // })
                    state.data.data= state?.data?.data.map(
                        (item) => item.userID === action?.payload?.data?.data?.userID ? action.payload?.data?.data : item
                    );
                }
            })
            .addCase(updateAdmin.rejected, (state, action) => {
                state.loading = false
                // toast.error(action?.payload?.response?.data?.message ? action?.payload?.response?.data?.message : action?.payload?.message, {
                //     autoClose: 2000
                // })
                state.data = ''
            })
    }
})

export const { reset } = adminMangeSlice.actions;
export default adminMangeSlice.reducer;