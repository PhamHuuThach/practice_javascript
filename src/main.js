import { UserController } from "./controllers/userController";
import { UserService } from "./services/userService";
import { UserView } from "./views/userView";

new UserController(new UserView(), new UserService());
