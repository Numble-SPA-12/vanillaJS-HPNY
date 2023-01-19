import { deleteComment } from "../../apis/comment";
import Component from "../../core/Component";

import deleteIcon from "../../assets/icon_delete.svg";

class CommentItem extends Component {
  template() {
    const { content, commentId } = this.$props.comment;

    return `<li class='comment_item'>
              <p class='comment_content'>${content}</p>
              <button class='comment_delete' data-comment-id=${commentId}>
                <img src=${deleteIcon} alt="댓글 삭제 버튼" />
              </button>
            </li>`;
  }

  setEvent() {
    const { commentId } = this.$props.comment;
    this.addEvent("click", `[data-comment-id="${commentId}"]`, async () => {
      await deleteComment(commentId);
      this.$props.deleteCommentState(commentId);
    });
  }
}

export default CommentItem;
