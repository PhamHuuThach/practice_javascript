import axiosInstance from "../config";
import { UserModel } from "../models/userModel";
export class UserService {
  async getUsers() {
    const response = await axiosInstance.get("/users");
    console.log(response);
    return response.data.map(UserModel.fromJSON);
  }
}
