// import { Sidebar } from "./sidebarvỉew";
// import { Header } from "./headerview";
// import { Main } from "./mainview";

// export const Home = (users) => `
//   <div class="home">
//     <div id="home__left" class="home__left">${Sidebar()}</div>
//     <div id="home__right" class="home__right">${Header()} ${Main(users)}</div>
//   </div>
// `;

import { Sidebar } from "./sidebarvỉew";
import { Header } from "./headerview";
import { Main } from "./mainview";

export const Home = (users) => {
  return `
    <div class="home">
      <div id="home__left" class="home__left">${Sidebar()}</div>
      <div id="home__right" class="home__right">
      ${Header()}
        ${Main(users)}
      </div>
    </div>
  `;
};
