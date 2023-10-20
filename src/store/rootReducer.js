import { combineReducers } from "@reduxjs/toolkit";
import userProfileSlice from '../services/user.slice';
import urlsSlice from "../services/urls.slice";
import adminProfileSlice from '../services/admin.slice'
import adminManageSlice from "../services/adminManage.slice";
import userManageSlice from "../services/userManage.slice";


export const rootReducer = combineReducers({
    user: userProfileSlice,
    urls: urlsSlice,
    admin: adminProfileSlice,
    adminmanage: adminManageSlice,
    usermanage: userManageSlice,
})