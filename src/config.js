import axios from "axios";
export const API_URL = "http://localhost:3001";

// Cấu hình cơ bản cho axios
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000, // Đặt timeout (5 giây)
});

// Tạo interceptor để xử lý lỗi hoặc thêm các header nếu cần
axiosInstance.interceptors.response.use(
  (response) => response, // Trả về response nếu thành công
  (error) => {
    // Xử lý lỗi tại đây
    console.error("API call error:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
