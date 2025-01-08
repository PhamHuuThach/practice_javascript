import { UserService } from "../services/userService";
import { UserModel } from "../models/userModel";
export class UserController {
  constructor(view, service) {
    this.userView = view;
    this.userService = service;
    this.loadUsers();
  }
  //Load controller
  async loadUsers() {
    const users = await this.userService.getUsers();
    this.userView.renderTable(users);
    this.userView.bindAddUser(this.handleAddUser);
    this.userView.bindDeleteUser(this.handleDeleteUser);
    this.userView.bindEditUser(this.handleEditUser);
    this.userView.bindUpdateUser(this.handleUpdateUser);
  }
  //Delete controller
  handleDeleteUser = async (userId) => {
    await this.userService.deleteUser(userId);
    this.loadUsers();
  };
  //Add controller
  handleAddUser = async (userData) => {
    const newUser = new UserModel(
      userData.id,
      userData.name,
      userData.office,
      userData.position,
      userData.email
    );
    await this.userService.addUser(newUser);
    this.loadUsers();
  };
  //Edit controller
  handleEditUser = async (userId) => {
    const user = await this.userService.getUserById(userId);
    this.userView.fillform(user);
  };
  //Update controller
  handleUpdateUser = async (userid, userData) => {
    const user = new UserModel(
      userid, // Dữ liệu user đã cập nhật từ form
      userData.name,
      userData.office,
      userData.position,
      userData.email
    );
    await this.userService.updateUser(user);
    this.loadUsers();
  };
}
