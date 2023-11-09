import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authApi from '../api/authApi';
import { NotificationShow } from "@/components/NotificationShow";

const initialState = {
    loading: true,
    error: '',
    data: [],
}

export const getUsers = createAsyncThunk("get/users", async (page) => {
    try {
        const data = await authApi.get(`/api/admin/allusers?page=${page}&limit=10`)
        return data
    }
    catch (error) {
        return error
    }
});

export const updateUsers = createAsyncThunk("update/users", async (value) => {
    try {
        const data = await authApi.put(`api/admin/update-user/${value.id}`, value.values)
        return data
    }
    catch (error) {
        return error
    }
});

const userMangeSlice = createSlice({
    name: 'usermanage',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state) => {
                state.loading = true
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.loading = false
                if (action?.payload?.response?.status >= 400) {
                    state.error = action?.payload?.response?.data?.message ? action?.payload?.response?.data?.message : action?.payload?.message
                }
                else {
                    state.data = action?.payload?.data
                }
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.loading = false
                state.error = action?.payload?.response?.response?.data?.message
            })

            //update user
            .addCase(updateUsers.pending, (state) => {
                state.loading = true
            })
            .addCase(updateUsers.fulfilled, (state, action) => {
                state.loading = false
                if (action?.payload?.response?.status >= 400) {
                    NotificationShow({title:'Failed',message:'Status update failed',color:'red'})
                }
                else {
                    NotificationShow({title:'Success',message:'Status update success',color:'green'})
                    state.data.data= state?.data?.data.map(
                        (item) => item.userID === action?.payload?.data?.data?.userID ? action.payload?.data?.data : item
                    );
                }
            })
            .addCase(updateUsers.rejected, (state, action) => {
                state.loading = false
                NotificationShow({title:'Failed',message:'Status update failed',color:'red'})
            })
    }
})

export const { reset } = userMangeSlice.actions;
export default userMangeSlice.reducer;