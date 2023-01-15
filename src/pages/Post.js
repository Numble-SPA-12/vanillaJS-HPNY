import { deletePost, getPostDetail } from "../apis/post";
import Button from "../components/common/Button";
import Header from "../components/common/Header";
import postDetail from "../components/PostDetail";
import Component from "../core/Component";
import { navigateTo } from "../router";

import "../styles/post.scss";

class Post extends Component {
  template() {
    return `
    <header class='header'></header>
    <main>
      <section class='post_detail_container'>상세글 페이지</section>
      <div class='edit_delete_button_container'></div>
    </main>
    `;
  }

  setup() {
    this.$params = window.location.pathname.split("/")[2];
    this.$state = {};
    this.$getPostDetail(this.$params);
  }

  async $getPostDetail(postId) {
    const { data } = await getPostDetail(postId);
    if (data) {
      this.setState({ post: data.post, comments: data.comments });
    } else {
      this.$goToHomePage();
    }
  }

  mounted() {
    const $header = document.querySelector(".header");
    const $postDetail = document.querySelector(".post_detail_container");
    const $buttonContainer = document.querySelector(
      ".edit_delete_button_container"
    );

    new Header($header);
    new postDetail($postDetail, {
      post: this.$state.post,
    });
    new Button($buttonContainer, [
      {
        content: `수정 📝`,
        className: `post_edit`,
        onClick: () => this.$goToEditPage(this.$params),
      },
      {
        content: `삭제 🗑️`,
        className: `post_delete`,
        onClick: () => this.$deletePost(this.$params),
      },
    ]);
  }

  $goToEditPage(postId) {
    navigateTo(`/edit/${postId}`);
  }

  $goToHomePage() {
    alert("존재하지 않는 글입니다!");
    navigateTo(`/`);
  }

  async $deletePost(postId) {
    await deletePost(postId);
    navigateTo(`/`);
  }
}

export default Post;
