import axiosInstance from "../config";
import { UserModel } from "../models/userModel";
export class UserService {
  // Lấy dữ liệu
  async getUsers() {
    const response = await axiosInstance.get("/users");
    console.log(response);
    return response.data.map(UserModel.fromJSON);
  }
  // Delete users
  async deleteUser(userId) {
    const response = await axiosInstance.delete(`/users/${userId}`);
    return response.data;
  }
  // Đẩy dữ liệu vào data
  async addUser(user) {
    user.id = `${Date.now()}${Math.floor(Math.random() * 1000)}`;
    const response = await axiosInstance.post("/users", user.toJSON()); //toJson() Phương thức chuyển đối tượng UserModel thành JSON
    return UserModel.fromJSON(response.data); // Trả về đối tượng UserModel mới
  }

  // Lấy dữ liệu theo id
  async getUserById(userId) {
    const response = await axiosInstance.get(`/users/${userId}`);
    return UserModel.fromJSON(response.data);
  }

  // Update dữ liệu
  async updateUser(user) {
    const response = await axiosInstance.put(
      `/users/${user.id}`,
      user.toJSON()
    );
    return UserModel.fromJSON(response.data);
  }
}
