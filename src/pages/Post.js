import { getPostDetail } from "../apis/post";
import Header from "../components/Header";
import postDetail from "../components/PostDetail";
import Component from "../core/Component";

import "../styles/post.scss";

class Post extends Component {
  template() {
    return `
    <header class='header'></header>
    <main>
      <section class='post_detail_container'>상세글 페이지</section>
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
    this.setState({ post: data.post, comments: data.comments });
  }

  mounted() {
    const $header = document.querySelector(".header");
    const $postDetail = document.querySelector(".post_detail_container");

    new Header($header);
    new postDetail($postDetail, {
      post: this.$state.post,
    });
  }
}

export default Post;
