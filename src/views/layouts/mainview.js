import { Banner } from "../components/bannerview";
import { Table } from "../components/tableview";

export const Main = (users) => {
  return `
    <div class="main">
      <div id="main__banner" class="main__banner">
        ${Banner()}
      </div>
      <div id="main__table" class="main__table">
        ${Table(users)}
      </div>  
    </div>
  `;
};
