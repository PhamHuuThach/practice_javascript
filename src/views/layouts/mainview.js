import { Banner } from "../components/bannerview";

export const Main = () =>
  ` <div class="main">
    <div id="main__banner" class="main__banner">
      ${Banner()}
    </div>
    <div id="main__table" class="main__table">
    </div>
  </div>
`;
