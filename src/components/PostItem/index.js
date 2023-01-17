import Component from "../../core/Component";
import { navigateTo } from "../../router";

class PostItem extends Component {
  template() {
    const { postId, image, title, content } = this.$props.post;
    return `
          <li class="post_item_container" data-post-id=${postId}>
            <img src=${image} alt="사용자가 올린 글의 이미지"/>
            <div class="post_content_container">
              <strong class="post_title">${title}</strong>
              <p class="post_content">${content}</p>
            </div>
          </li>
          `;
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
