import instance from "./instance";

export const createComment = async (postId, commentData) => {
  try {
    const { data } = await instance.post(`/comment/${postId}`, commentData);
    return data;
  } catch (err) {
    console.error(err);
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
