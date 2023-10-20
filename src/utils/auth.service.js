import api from './api/api';
import resetpassApi from './api/resetpassApi'

export const login = async (values) => {
    try {
        const data = await api.post("/api/user/login", values)
        data && localStorage.setItem("user", JSON.stringify(data?.data));
        return data;
    }
    catch (err) {
        return err;
    }
};

export const signup = async (values) => {
    try {
        const data  = await api.post("/api/user/signup", values)
        return data;
    }
    catch (err) {
        return err;
    }
};

export const requestPassChange = async (values) => {
    try {
        const data = await api.post("/api/user/reset-pass-req", values);
        return data;
    }
    catch (err) {
        return err;
    }
};

export const setNewPass = async (values) => {
    try {
        const data = await resetpassApi.post("/api/user/set-pass", values)
        return data;
    }
    catch (err) {
        return err;
    }
};

export const Logout = async () => {
    localStorage.removeItem("user");
};