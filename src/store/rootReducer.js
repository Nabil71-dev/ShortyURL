import { combineReducers } from "@reduxjs/toolkit";
import userProfileSlice from '../services/user.slice';
import urlsSlice from "../services/urls.slice";
import adminProfileSlice from '../services/admin.slice'
import userManageSlice from "../services/userManage.slice";
import allUrlsSlice from "@/services/allUrls.slice";
import stateSlice from "@/services/state.slice";


export const rootReducer = combineReducers({
    user: userProfileSlice,
    urls: urlsSlice,
    admin: adminProfileSlice,
    usermanage: userManageSlice,
    allUrls:allUrlsSlice,
    stats:stateSlice,
})