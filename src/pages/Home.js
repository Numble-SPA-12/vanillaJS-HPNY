import { getPostList } from "../apis/post";
import Button from "../components/common/Button";
import Header from "../components/common/Header/index";
import PostList from "../components/PostList";
import Page from "../core/Page";
import { navigateTo } from "../router";

import "../styles/home.scss";

class Home extends Page {
  template() {
    return `
    <header class='header' style="justify-content:flex-end"></header>
    <main>
      <div class='upload_post_button_container'></div>
      <section class='post_list_container'></section>
    </main>
    `;
  }

  setup() {
    this.$state = {};
    this.$getPostList();
  }

  mounted() {
    const $header = document.querySelector(".header");
    const $uploadButtonContainer = document.querySelector(
      ".upload_post_button_container"
    );
    const $postListContainer = document.querySelector(".post_list_container");

    new Header($header, {
      header: $header,
    });
    new Button($uploadButtonContainer, {
      content: `게시글 작성하기`,
      onClick: this.goUploadPage,
    });
    new PostList($postListContainer, {
      posts: this.$state.posts,
    });
  }

  goUploadPage() {
    navigateTo("/upload");
  }

  async $getPostList() {
    const { data } = await getPostList();
    this.setState({ posts: data.posts });
  }
}

export default Home;
