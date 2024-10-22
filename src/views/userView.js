import { Home } from "./layouts/Home";

export class UserView {
  constructor() {
    this.app = document.getElementById("app");
  }

  renderTable(users) {
    this.app.innerHTML = "";
    this.app.innerHTML = Home(users);
    this.tableNode = this.getTableNode();

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
  }
  getTableNode() {
    return document.getElementById("table__tbody");
  }
}
