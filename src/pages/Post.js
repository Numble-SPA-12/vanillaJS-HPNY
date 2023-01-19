import { getPostDetail } from "../apis/post";
import CommentInput from "../components/CommentInput";
import CommentItem from "../components/CommentItem";
import Header from "../components/common/Header";
import postDetail from "../components/PostDetail";
import Page from "../core/Page";
import { navigateTo } from "../router";

import "../styles/post.scss";

class Post extends Page {
  template() {
    return `
    <header class='header'></header>
    <main>
      <section class='post_detail_container'></section>
      <section class='comment_container'>
        <ul class='comment_list'></ul>
        <form class='comment_form'></form>
      </section>
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
    const $commentList = document.querySelector(".comment_list");
    const $commentForm = document.querySelector(".comment_form");

    new Header($header, {
      header: $header,
    });

    new postDetail($postDetail, {
      post: this.$state.post,
      params: this.$params,
    });

    if (this.$state.comments) {
      this.$state.comments.map((comment) => {
        new CommentItem($commentList, {
          comment,
          deleteCommentState: (commentId) =>
            this.$deleteCommentState(commentId),
        });
      });
    }

    new CommentInput($commentForm, {
      form: $commentForm,
      params: this.$params,
      createCommentState: (newComment) => this.$createCommentState(newComment),
    });
  }

  $goToHomePage() {
    alert("존재하지 않는 글입니다!");
    navigateTo(`/`);
  }

  $deleteCommentState(commentId) {
    const newComments = this.$state.comments.filter((comment) => {
      return +comment.commentId !== +commentId;
    });

    this.setState({
      comments: newComments,
    });
  }

  $createCommentState(newComment) {
    this.setState({
      comments: [...this.$state.comments, newComment],
    });
  }
}

export default Post;
