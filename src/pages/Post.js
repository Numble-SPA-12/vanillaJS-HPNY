import { deletePost, getPostDetail } from "../apis/post";
import CommentInput from "../components/CommentInput";
import CommentList from "../components/CommentList";
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
      <div class='post_detail_container'></div>
      <div class='edit_delete_button_container'></div>
      <ul class='comment_list'></ul>
      <form class='comment_form'></form>
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
    const $commentList = document.querySelector(".comment_list");
    const $commentForm = document.querySelector(".comment_form");

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
    new CommentList($commentList, {
      commentList: this.$state.comments,
      deleteCommentState: (commentId) => this.$deleteCommentState(commentId),
    });
    new CommentInput($commentForm, {
      params: this.$params,
      createCommentState: (newComment) => this.$createCommentState(newComment),
    });
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
