import htm from "htm";
import { h } from "preact";
import { Sidebar } from "./sidebarvỉew";
import { Header } from "./headerview";
import { Main } from "./mainview";
const html = htm.bind(h);

export const Home = (users) => `
  <div class="home">
    <div id="home__left" class="home__left">${Sidebar()}</div>
    <div id="home__right" class="home__right">${Header()} ${Main(users)}</div>
  </div>
`;
