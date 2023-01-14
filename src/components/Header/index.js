import Component from "../../core/Component.js";
import { navigateTo } from "../../router.js";
import Button from "../Button/index.js";

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
      content: `<`,
      onClick: this.goBackPage,
    });
    new Button($titleButton, {
      content: `HPNY 2023`,
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
