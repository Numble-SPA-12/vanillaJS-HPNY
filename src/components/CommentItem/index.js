import { deleteComment } from "../../apis/comment";
import Component from "../../core/Component";

class CommentItem extends Component {
  template() {
    const { content, commentId } = this.$props.comment;

    return `<li class='comment_item'>
              <p class='comment_content'>${content}</p>
              <button class='comment_delete' data-comment-id=${commentId}>삭제</button>
            </li>`;
  }

  setEvent() {
    this.addEvent("click", ".comment_delete", async (e) => {
      const commentId = e.target.dataset.commentId;

      await deleteComment(commentId);
      this.$props.deleteCommentState(commentId);
    });
  }
}

export default CommentItem;
