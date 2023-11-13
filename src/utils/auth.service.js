import api from '../api/api';
import resetApi from '../api/resetApi'
import { encrypt } from '../utils/cookieParser/index';
import Cookies from "js-cookie";

export const login = async (values) => {
    try {
        const data = await api.post("/api/user/login", values)

        const accessToken = encrypt(data?.data?.data?.accessToken)
        const token = encrypt(data?.data?.data?.token)
        const temp = { ...data, accessToken, token }

        data && Cookies.set("user", JSON.stringify(temp));
        return data;
    }
    catch (err) {
        return err;
    }
};

export const signup = async (values) => {
    try {
        const data = await api.post("/api/user/signup", values)
        return data;
    }
    catch (err) {
        return err;
    }
};

export const requestPassChange = async (values) => {
    try {
        const data = await api.post("/api/user/reset-req", values);
        data && localStorage.setItem("resetToken", JSON.stringify(data?.data));
        return data;
    }
    catch (err) {
        return err;
    }
};

export const setNewPass = async (values) => {
    try {
        const data = await resetApi.post("/api/user/set-pass", values)
        return data;
    }
    catch (err) {
        return err;
    }
};

export const Logout = () => {
    Cookies.remove("user");
};