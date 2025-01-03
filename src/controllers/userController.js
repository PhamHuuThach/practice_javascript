import { UserService } from "../services/userService";
import { UserModel } from "../models/userModel";
export class UserController {
  constructor(view, service) {
    this.userView = view;
    this.userService = service;
    this.loadUsers();
  }

  async loadUsers() {
    const users = await this.userService.getUsers();
    this.userView.renderTable(users);
    this.bindFormAddMember();
    this.userView.bindAddUser(this.handleAddUser);
  }

  bindFormAddMember() {
    this.userView.renderFormAddMember();
  }
  //Addmember Controller
  handleAddUser = async (userData) => {
    const newUser = new UserModel(
      userData.id,
      userData.name,
      userData.office,
      userData.position,
      userData.email
    );
    console.log(newUser);
    await this.userService.addUser(newUser);
    this.loadUsers();
  };
}
