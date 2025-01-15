export const Header = () => {
  return `<div class="header-container">
<div class="wrap">
   <div class="search">
      <input type="text" class="searchTerm" id="searchTerm" placeholder="Search here">
      <button type="submit" class="searchButton">
        <i class=""> <img src="assets/icons/search.svg" alt="avatar"/></i>
     </button>
   </div>
</div>
    <div class="header-container__user">
    <button class="addmember" type="submit">  <img src="assets/icons/addmember.svg"alt="add"/>Add member</button>
      <figure class="header-container__user__avatar">
      <p class="header-container__user__text">Hello, Liu Liu</p>
        <img src="assets/icons/avatar.svg" alt="avatar"/>
      </figure>
    </div>
  </div>`;
};
