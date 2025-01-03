import axiosInstance from "../config";
import { UserModel } from "../models/userModel";
export class UserService {
  async getUsers() {
    const response = await axiosInstance.get("/users");
    console.log(response);
    return response.data.map(UserModel.fromJSON);
  }

  // async addUser(user) {
  //   const response = await axios.post(this.apiEndpoint, user.toJSON()); // Chuyển đổi UserModel thành JSON
  //   return UserModel.fromJSON(response.data); // Trả về đối tượng UserModel mới
  // }

  // addUser(user) {
  //   return axiosInstance.post("/users", user.toJSON()); // Chuyển đổi UserModel thành JSON
  // }

  async addUser(user) {
    const newId = Math.max(...(await this.getUsers()).map((u) => u.id)) + 1;
    user.id = newId; // Tạo id mới
    const response = await axiosInstance.post("/users", user.toJSON()); // Chuyển đổi UserModel thành JSON
    return UserModel.fromJSON(response.data); // Trả về đối tượng UserModel mới
  }
}
