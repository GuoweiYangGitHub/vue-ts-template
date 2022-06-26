import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { ElMessage, ElLoading } from 'element-plus';

const NODE_ENV = import.meta.env.MODE === 'development';

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_API_HOST,
  timeout: 60000
});

// Request interceptors
request.interceptors.request.use(
  (config: AxiosRequestConfig) => config,
  (error) => {
    console.log(error); // for debug

    return Promise.reject(error);
  }
);

// Response interceptors
request.interceptors.response.use(
  async (response: AxiosResponse) => {
    if (response.data.code === 200) {
      return Promise.resolve(response.data);
    } else {
      ElMessage.error(response.data.msg);

      return Promise.resolve(response.data);
    }
  },
  (error) => {
    ElMessage.error(error);

    return Promise.reject(error);
  }
);

export default request;
