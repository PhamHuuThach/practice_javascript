import axiosInstance from "../config";
import { UserModel } from "../models/userModel";
export class UserService {
  // Lấy dữ liệu
  async getUsers() {
    const response = await axiosInstance.get("/users");
    console.log(response);
    return response.data.map(UserModel.fromJSON);
  }
  // Đẩy dữ liệu vào data
  async addUser(user) {
    user.id = new Date().getTime();
    const response = await axiosInstance.post("/users", user.toJSON()); //toJson() Phương thức chuyển đối tượng UserModel thành JSON
    return UserModel.fromJSON(response.data); // Trả về đối tượng UserModel mới
  }
}
