import { deletePost } from "../../apis/post";
import Component from "../../core/Component";
import { navigateTo } from "../../router";
import Button from "../common/Button";

import editIcon from "../../assets/icon_edit_alt.svg";
import deleteIcon from "../../assets/icon_delete.svg";

class postDetail extends Component {
  template() {
    if (this.$props.post) {
      const { image, title, createdAt, content } = this.$props.post;
      const convertedTime = this.getStringDate(new Date(createdAt));

      return `
            <div>
              <img src=${image} alt="게시글 이미지"/>
              <strong class="post_detail_title">${title}</strong>
              <p class="post_detail_content">${content}</p>
              <div class="time_button_container">
                <time datetime=${createdAt}>${convertedTime}</time>
                <div class="button_container"></div>
              </div>
            </div>
        `;
    }

    return ``;
  }

  mounted() {
    if (this.$props.post) {
      const $buttonContainer = document.querySelector(".button_container");

      new Button($buttonContainer, {
        content: `<img src=${editIcon} alt="수정 버튼" />`,
        className: `post_edit`,
        onClick: () => this.$goToEditPage(this.$props.params),
      });

      new Button($buttonContainer, {
        content: `<img src=${deleteIcon} alt="삭제 버튼" />`,
        className: `post_delete`,
        onClick: () => this.$deletePost(this.$props.params),
      });
    }
  }

  getStringDate(date) {
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10) {
      month = `0${month}`;
    }

    if (day < 10) {
      day = `0${day}`;
    }

    return `${year}년 ${month}월 ${day}일`;
  }

  $goToEditPage(postId) {
    navigateTo(`/edit/${postId}`);
  }

  async $deletePost(postId) {
    await deletePost(postId);
    navigateTo(`/`);
  }
}

export default postDetail;
