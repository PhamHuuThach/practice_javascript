import { Banner } from "../components/bannerview";
import { Table } from "../components/tableview";
import { addMember } from "../components/addMember";

export const Main = (users) => {
  return `
    <div class="main">
      <div id="main__banner" class="main__banner">
        ${Banner()}
      </div>
      <div class="main__table-addmeber"> 
        <div id="main__table" class="main__table">
          ${Table(users)}
        </div>
        <div id="main__addmember" class="main__addmember">
          ${addMember()}
        </div>  
      </div> 
    </div>
  `;
};
