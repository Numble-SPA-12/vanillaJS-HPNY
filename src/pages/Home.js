import Button from "../components/Button";
import Header from "../components/Header/index";
import Component from "../core/Component";
import { navigateTo } from "../router";

import "../styles/home.scss";

class Home extends Component {
  template() {
    return `
    <header class='header' style="justify-content:flex-end"></header>
    <main>
      <div class='upload_post_button_container'></div>
      <ul>글 목록</ul>
    </main>
    `;
  }

  mounted() {
    const $header = document.querySelector(".header");
    const $uploadButtonContainer = document.querySelector(
      ".upload_post_button_container"
    );

    new Header($header);
    new Button($uploadButtonContainer, {
      content: `게시글 작성하기`,
      onClick: this.goUploadPage,
    });
  }

  goUploadPage() {
    navigateTo("/upload");
  }
}

export default Home;
