import { createComment } from "../../apis/comment";
import Component from "../../core/Component";
import Button from "../common/Button";
import Input from "../common/Input";

class CommentInput extends Component {
  setup() {
    this.$content = "";
  }

  mounted() {
    new Input(this.$props.form, {
      type: "text",
      placeholder: "댓글을 입력해주세요 !",
      value: this.$content,
      className: "comment_content",
      onChange: (content) => this.handleInputContent(content),
    });

    new Button(this.$props.form, {
      content: `게시`,
      className: `comment_submit`,
      onClick: () => this.$createComment(this.$props.params, this.$content),
    });
  }

  async $createComment(postId, commentContent) {
    const { data } = await createComment(postId, commentContent);
    this.$props.createCommentState(data);
  }

  handleInputContent(content) {
    this.$content = content;
  }
}

export default CommentInput;
