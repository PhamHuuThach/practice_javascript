import { UserService } from "../services/userService";
export class UserController {
  constructor(view, service) {
    this.userView = view;
    this.userService = service;
    this.loadUsers();
  }

  async loadUsers() {
    const users = await this.userService.getUsers();
    this.userView.renderTable(users);
  }
}
