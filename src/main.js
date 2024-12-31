import { Router } from "./routes.js";
import { UserController } from "./controllers/userController.js";
import { UserService } from "./services/userService.js";
import { UserView } from "./views/userView.js";

// Định nghĩa các route
const routes = {
  "": () => {
    // Route mặc định
    new UserController(new UserView(), new UserService());
  },
  users: () => {
    // Route dành cho UserController
    new UserController(new UserView(), new UserService());
  },
  404: () => {
    // Route không tìm thấy
    const app = document.getElementById("app");
    app.innerHTML = "<h1>Page not found</h1>";
  },
};

// Khởi tạo Router với các route đã định nghĩa
new Router(routes);
