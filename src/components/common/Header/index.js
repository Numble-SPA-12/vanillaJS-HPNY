import Component from "../../../core/Component.js";
import { navigateTo } from "../../../router.js";
import Button from "../Button/index.js";

import leftArrowIcon from "../../../assets/icon_arrow_back.svg";
import "../../../styles/header.scss";

class Header extends Component {
  template() {
    return `
    <div class='button_container'></div>
    <div class='title_container'></div>
    `;
  }

  mounted() {
    const $backButton = this.$target.querySelector(".button_container");
    const $titleButton = this.$target.querySelector(".title_container");

    const isHomePage = window.location.pathname === "/";
    if (isHomePage) $backButton.style.display = "none";

    new Button($backButton, {
      content: `<img src=${leftArrowIcon} alt="뒤로가기 버튼" class="back_arrow_img"/>`,
      onClick: this.goBackPage,
    });
    new Button($titleButton, {
      content: `<h1 class="header_title">HPNY 2023</h1>`,
      onClick: this.goHomePage,
    });
  }

  goBackPage() {
    history.back();
  }

  goHomePage() {
    navigateTo("/");
  }
}

export default Header;
