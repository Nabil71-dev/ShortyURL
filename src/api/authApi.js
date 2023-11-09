import axios from "axios";
import { encrypt, decrypt } from "@/utils/cookieParser";

const instance = axios.create({
  baseURL: process.env.SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Before making request, it will follow this everytime
instance.interceptors.request.use(
  (config) => {

    const data = JSON.parse(localStorage.getItem("user"))
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
        // console.log("refresh", TokenService.getLocalRefreshToken());
        try {
          const data = JSON.parse(localStorage.getItem("user"))
          const token = decrypt(data.token);

          const rs = await axios.get(`${process.env.SERVER_URL}api/user/token/refresh`, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `token ${token}`
            }
          })
          const { accessToken } = rs.data.data;

          //set new access token
          let user = JSON.parse(localStorage.getItem("user"));
          user.accessToken = encrypt(accessToken);
          localStorage.setItem("user", JSON.stringify(user));

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