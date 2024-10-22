import axiosInstance from "../config";
export class UserService {
  async getUsers() {
    try {
      const response = await axiosInstance.get("/users");
      console.log(response);
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      return [];
    }
  }
}
