import Navigo from "navigo";
import { h, render } from "preact";
import { Home } from "./views/layouts/Home";

const router = new Navigo("/");

export const setupRouter = () => {
  router
    .on("/", () => {
      // Tìm phần tử gốc trong DOM
      const app = document.getElementById("app");
      app.innerHTML = ""; // Xóa nội dung cũ // Kiểm tra xem Sidebar có được tạo không
      render(Home(), app); // Render Sidebar vào DOM
    })
    .resolve();
};
