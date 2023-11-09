import axios from "axios";

const instance = axios.create({
  baseURL: process.env.SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Before making request, it will follow this everytime
instance.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("resetToken"))
    if (token.data) {
      config.headers["Authorization"] = `Bearer ${token.data.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;