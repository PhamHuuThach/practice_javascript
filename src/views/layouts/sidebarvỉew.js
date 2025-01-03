export const Sidebar = () => {
  return `<div class="sidebar-container">
   <div id="open" class="sidebar-container__open">
      <img
        class="sidebar-container__open__image"
        src="assets/icons/chevron-right.svg"
        alt="chevron-right"
      />
    </div>
    <div id="close" class="sidebar-container__close">
      <img
        class="sidebar-container__close__image"
        src="assets/icons/chevron-left.svg"
        alt="chevron-left"
      />
    </div>
    <div class="sidebar-container__hearder">
      <div class="logo">
        <img
          src="assets/icons/logo-icon/output-onlinepngtools1.svg"
          alt="logo"
        />
      </div>
      <p id="logo__title" class="logo__title">Trang admin quản lý chấm công</p>
    </div>
    <div id="sidebar-container__list" class="sidebar-container__list">
      <div class="sidebar-container__list__item">
        <div class="sidebar-container__list__item__icon">
          <img src="assets/icons/home.svg" alt="" />
        </div>
        <div id="sidebar-container__list__item__title" class="sidebar-container__list__item__title">
          <a href="">Dashboard</a>
        </div>
      </div>
      <div class="sidebar-container__list__item">
        <div class="sidebar-container__list__item__icon">
          <img src="assets/icons/letrai.svg" alt="" />
        </div>
        <div id="sidebar-container__list__item__title" class="sidebar-container__list__item__title">
          <a href="">Nhân viên</a>
        </div>
      </div>
      <div class="sidebar-container__list__item">
        <div class="sidebar-container__list__item__icon">
          <img src="assets/icons/lichchamcong.svg" alt="" />
        </div>
        <div id="sidebar-container__list__item__title" class="sidebar-container__list__item__title">
          <a href="">Lịch sử chấm công</a>
        </div>
      </div>
      <div  class="sidebar-container__list__item">
        <div class="sidebar-container__list__item__icon">
          <img src="assets/icons/quanlyphanquyen.svg" alt="" />
        </div>
        <div id="sidebar-container__list__item__title" class="sidebar-container__list__item__title">
          <a href="">Quản lý phân quyền</a>
        </div>
      </div>
      <div id="sidebar-container__list__item-Addmember" class="sidebar-container__list__item">
        <div class="sidebar-container__list__item__icon">
          <img src="assets/icons/addmember.svg" alt="" />
        </div>
        <div id="sidebar-container__list__item__title" class="sidebar-container__list__item__title">
          <a href="">Thêm user</a>
        </div>
      </div>
    </div>
    <div class="sidebar-container__footer">
      <div class="sidebar-container__footer__icon">
        <div class="sidebar-container__footer__icon__number">
          <p>19</p>
        </div>
        <img class="sidebar-container__footer__icon__image" src="assets/icons/caidat.svg" alt="caidat" />
      </div>
    </div>
  </div>`;
};
