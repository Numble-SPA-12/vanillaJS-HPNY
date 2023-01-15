import Button from "../components/common/Button";
import Header from "../components/common/Header/index";
import PostList from "../components/PostList";
import Component from "../core/Component";
import { navigateTo } from "../router";

import "../styles/home.scss";

class Home extends Component {
  template() {
    return `
    <header class='header' style="justify-content:flex-end"></header>
    <main>
      <div class='upload_post_button_container'></div>
      <section class='post_list_container'>글 목록</section>
    </main>
    `;
  }

  mounted() {
    const $header = document.querySelector(".header");
    const $uploadButtonContainer = document.querySelector(
      ".upload_post_button_container"
    );
    const $postListContainer = document.querySelector(".post_list_container");

    new Header($header);
    new Button($uploadButtonContainer, {
      content: `게시글 작성하기`,
      onClick: this.goUploadPage,
    });
    new PostList($postListContainer);
  }

  goUploadPage() {
    navigateTo("/upload");
  }
}

export default Home;
