import Component from "../../core/Component";
import { navigateTo } from "../../router";

class PostItem extends Component {
  template() {
    const htmlStr = this.$props.posts
      .map(
        (post) =>
          `
          <li class="post_item_container" data-post-id=${post.postId}>
            <img src=${post.image} alt="사용자가 올린 글의 이미지"/>
            <div class="post_content_container">
              <strong class="post_title">${post.title}</strong>
              <p class="post_content">${post.content}</p>
            </div>
          </li>
          `
      )
      .join("");

    return htmlStr;
  }

  setEvent() {
    const { goPostDetailPage } = this;

    this.addEvent("click", ".post_item_container", (e) => {
      goPostDetailPage(e.target.closest("[data-post-id]").dataset.postId);
    });
  }

  goPostDetailPage(postId) {
    navigateTo(`/post/${postId}`);
  }
}

export default PostItem;
