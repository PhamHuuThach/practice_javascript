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
    this.userView.bindEditUser(this.handleEditUsertoForm);
    this.userView.bindUpdateUser(this.handleUpdateUsertoData);
    this.userView.bindSearch(this.handleSearch);
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
  //Edit row id data Table to form
  handleEditUsertoForm = async (userId) => {
    const user = await this.userService.getUserById(userId);
    this.userView.fillForm(user);
  };
  //Update data id to data model
  handleUpdateUsertoData = async (userid, userData) => {
    const user = new UserModel(
      userid,
      userData.name,
      userData.office,
      userData.position,
      userData.email
    );
    await this.userService.updateUser(user);
    this.loadUsers();
  };
  // Handle search action
  handleSearch = async (searchTerm) => {
    const users = await this.userService.getUsers();
    const filteredUsers = users.filter((user) =>
      user.name.toUpperCase().includes(searchTerm.toUpperCase())
    );
    this.userView.updateSearchResults(filteredUsers);
  };
}
