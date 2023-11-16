import axios from "axios";
import { encrypt, decrypt } from "@/utils/cookieParser";
import Cookies from "js-cookie";

const instance = axios.create({
  baseURL: process.env.SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Before making request, it will follow this everytime
instance.interceptors.request.use(
  (config) => {

    const data = JSON.parse(Cookies.get("user"))
    const token = decrypt(data.accessToken);

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// With response data, it will follow this everytime
instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;
    if (err.response) {
      // access token expired
      if (err.response.status === 403 && !originalConfig._retry) {
        // handle infinite loop
        originalConfig._retry = true;
        try {
          const data = JSON.parse(Cookies.get("user"))
          const token = decrypt(data.token);

          const rs = await axios.get(`${process.env.SERVER_URL}api/user/token/refresh`, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `token ${token}`
            }
          })
          const { accessToken } = rs.data.data;

          //set new access token
          let user = JSON.parse(Cookies("user"));
          user.accessToken = encrypt(accessToken);
          Cookies.set("user", JSON.stringify(user));

          return instance(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
      // refresh token expired
    }
    return Promise.reject(err);
  }
);
export default instance;