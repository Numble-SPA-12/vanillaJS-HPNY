import Component from "../../../core/Component.js";
import { navigateTo } from "../../../router.js";
import Button from "../Button/index.js";

import leftArrowIcon from "../../../assets/icon_arrow_back.svg";
import "../../../styles/header.scss";

class Header extends Component {
  mounted() {
    const isHomePage = window.location.pathname === "/";

    if (!isHomePage) {
      new Button(this.$props.header, {
        content: `<img src=${leftArrowIcon} alt="뒤로가기 버튼" class="back_arrow_img"/>`,
        className: "back_button",
        onClick: this.goBackPage,
      });
    }
    new Button(this.$props.header, {
      content: `<h1 class="header_title">HPNY 2023</h1>`,
      className: "logo",
      onClick: this.goHomePage,
    });
  }

  goBackPage() {
    if (window.location.pathname.split("/")[1] === "post") {
      navigateTo("/");
    } else {
      history.back();
    }
  }

  goHomePage() {
    navigateTo("/");
  }
}

export default Header;
