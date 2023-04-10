import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://our-bazar-server.vercel.app",
});

export default axiosInstance;
