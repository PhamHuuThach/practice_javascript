// import { setupRouter } from "./routes";

import { UserController } from "./controllers/userController";
import { UserService } from "./services/userService";
import { UserView } from "./views/userView";

// document.addEventListener("DOMContentLoaded", () => {
//   setupRouter();
// });
// import UserController from "./controllers/userController";
new UserController(new UserView(), new UserService());
