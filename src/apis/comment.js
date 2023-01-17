import instance from "./instance";

export const createComment = async (postId, commentContent) => {
  try {
    const { data } = await instance.post(`/comment/${postId}`, {
      content: commentContent,
    });
    return data;
  } catch (err) {
    console.log(err.response.data.message);
    if (typeof err.response.data.message === "string") {
      alert(err.response.data.message);
    } else {
      alert("입력된 댓글이 없습니다.");
    }
  }
};

export const deleteComment = async (commentId) => {
  try {
    const { data } = await instance.delete(`/comment/${commentId}`);
    return data;
  } catch (err) {
    console.error(err);
  }
};
