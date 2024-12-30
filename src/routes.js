export class Router {
  constructor(routes) {
    this.routes = routes; // Các route được định nghĩa
    window.addEventListener("hashchange", () => this.handleRoute());
    window.addEventListener("load", () => this.handleRoute());
  }

  handleRoute() {
    const hash = window.location.hash.slice(1); // Loại bỏ dấu #
    const route = this.routes[hash] || this.routes["404"]; // Lấy route hoặc fallback 404

    try {
      route(); // Thực thi route
    } catch (error) {
      console.error("Routing error:", error);
      this.routes["404"](); // Fallback 404 nếu có lỗi
    }
  }
}
