import { Home } from "./layouts/home";

export class UserView {
  constructor() {
    this.app = document.getElementById("app");
  }
  // Add User View
  bindAddUser(callback) {
    this.saveButton = document.getElementById("save-member");
    this.saveButton.addEventListener("click", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const office = document.getElementById("office").value;
      const position = document.getElementById("position").value;
      const email = document.getElementById("email").value;
      if (this.validateInput(name, office, position, email)) {
        callback({ name, office, position, email });
      } else {
        alert("Add button not found");
      }
    });
  }
  renderTable(users) {
    this.app.innerHTML = "";
    this.app.innerHTML = Home(users);
    this.tableNode = this.getTableNode();
    //Đống sidebar
    this.closeBtn = document.getElementById("close");
    this.closeBtn.addEventListener("click", () => {
      document.getElementById("home__left").style.width = "6%";
      document.getElementById("home__right").style.width = "94%";
      document.getElementById("close").style.display = "none";
      document.getElementById("open").style.display = "block";
      document.getElementById("logo__title").style.display = "none";
      document.getElementById("sidebar-container__list").style.margin =
        "2em 0.5em 13em 1em";
      document
        .querySelectorAll(".sidebar-container__list__item__title")
        .forEach((e) => (e.style.display = "none"));
      document.querySelector(".sidebar-container__footer").style.margin =
        "0 auto";
      document.querySelector(".sidebar-container__footer__icon").style.width =
        "100%";
    });
    //Mở sidebar
    this.openBtn = document.getElementById("open");
    this.openBtn.addEventListener("click", () => {
      document.getElementById("home__left").style.width = "20%";
      document.getElementById("home__right").style.width = "80%";
      document.getElementById("close").style.display = "block";
      document.getElementById("open").style.display = "none";
      document.getElementById("logo__title").style.display = "block";
      document.getElementById("sidebar-container__list").style.margin =
        "2em 2em 6em 2em";
      document
        .querySelectorAll(".sidebar-container__list__item__title")
        .forEach((e) => (e.style.display = "block"));
      document.querySelector(".sidebar-container__footer").style.marginLeft =
        "3em";
    });
    //Render Form add
    this.openForm = document.getElementById(
      "sidebar-container__list__item-Addmember"
    );
    this.openForm.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("main__addmember").style.display = "block";
      document.getElementById("main__table").style.display = "none";
    });
  }
  getTableNode() {
    return document.getElementById("table__tbody");
  }
  //Delete Table view
  bindDeleteUser(handler) {
    const deleteButtons = document.querySelectorAll(".delete-btn");
    if (deleteButtons.length > 0) {
      deleteButtons.forEach((btn) => {
        btn.addEventListener("click", (event) => {
          const userId = event.target.dataset.id;
          handler(userId);
        });
      });
    }
  }
  //Edit Table view
  bindEditUser(handler) {
    const editButtons = document.querySelectorAll(".edit-btn");
    if (editButtons.length > 0) {
      editButtons.forEach((btn) => {
        btn.addEventListener("click", (event) => {
          const userId = event.target.dataset.id;
          handler(userId);
        });
      });
    }
  }
  //Hiển thị dư liệu ra form sau khi click edit với userId đó
  fillForm(userid) {
    document.getElementById("name").value = userid.name;
    document.getElementById("office").value = userid.office;
    document.getElementById("position").value = userid.position;
    document.getElementById("email").value = userid.email;
    document.getElementById("main__addmember").style.display = "block";
    document.getElementById("main__table").style.display = "none";
    document.getElementById("update-member").style.display = "block";
    document.getElementById("save-member").style.display = "none";
    document.getElementById("update-member").dataset.id = userid.id;
  }
  //Update member view
  bindUpdateUser(callback) {
    const updateButton = document.getElementById("update-member");
    if (updateButton) {
      updateButton.addEventListener("click", (e) => {
        e.preventDefault();
        const userId = e.target.dataset.id;
        const name = document.getElementById("name").value;
        const office = document.getElementById("office").value;
        const position = document.getElementById("position").value;
        const email = document.getElementById("email").value;
        if (this.validateInput(name, office, position, email)) {
          callback(userId, { name, office, position, email });
        } else {
          alert("Update button not found");
        }
      });
    }
  }
  // Kiểm tra dữ liệu đầu vào
  validateInput(name, office, position, email) {
    if (name === "") {
      alert("Need to fill in the  name");
      return;
    } else if (office === "") {
      alert("Need to fill in the office");
      return;
    } else if (position === "") {
      alert("Need to fill in the position");
      return;
    } else if (email === "") {
      alert("Need to fill in the email");
      return;
    } else {
      return true;
    }
  }
}
