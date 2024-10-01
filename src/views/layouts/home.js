import htm from "htm";
import { h } from "preact";
import { Sidebar } from "./sidebarvỉew";
import { Header } from "./headerview";
const html = htm.bind(h);

export const Home = () => `
  <div class="home">
    <div id="home__left" class="home__left">${Sidebar()}</div>
    <div id="home__right" class="home__right">${Header()}</div>
  </div>
`;
