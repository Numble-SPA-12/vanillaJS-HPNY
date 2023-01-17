import { createComment } from "../../apis/comment";
import Component from "../../core/Component";
import Button from "../common/Button";

class CommentInput extends Component {
  template() {
    return `
      <input type="text" class="comment_content" placeholder="댓글을 입력해주세요 !"/>
      <div class="comment_submit_container"></div>
    `;
  }

  setup() {
    this.$content = "";
  }

  mounted() {
    const commentSubmitButton = document.querySelector(
      ".comment_submit_container"
    );

    new Button(commentSubmitButton, {
      content: `게시`,
      onClick: () => this.$createComment(this.$props.params, this.$content),
    });
  }

  async $createComment(postId, commentContent) {
    const { data } = await createComment(postId, commentContent);
    this.$props.createCommentState(data);
  }

  setEvent() {
    this.addEvent("change", ".comment_content", (e) => {
      this.$content = e.target.value;
    });
  }
}

export default CommentInput;
