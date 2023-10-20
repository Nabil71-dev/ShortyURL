import axios from "axios";

const instance = axios.create({
  baseURL: process.env.VITE_SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Before making request, it will follow this everytime
instance.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("user"))
    if (token.data) {
      config.headers["Authorization"] = `Bearer ${token.data.accessToken}`;
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
          const rs =await axios.get(`${import.meta.env.VITE_SERVER_URL}api/refresh/token`, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `token ${JSON.parse(localStorage.getItem("user"))?.data?.token}`
            }
          })
          const { accessToken } = rs.data.data;
          
          //set new access token
          let user = JSON.parse(localStorage.getItem("user"));
          user.data.accessToken = accessToken;
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