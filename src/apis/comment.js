import instance from "./instance";

export const createComment = async (postId, commentData) => {
  try {
    const { data } = await instance(`/comment/${postId}`, commentData);
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const deleteComment = async (commentId) => {
  try {
    const { data } = await instance(`/comment/${commentId}`);
    return data;
  } catch (err) {
    console.error(err);
  }
};
