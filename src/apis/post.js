import { baseInstance } from "./instance";

export const getPostList = async () => {
  try {
    const { data } = await baseInstance.get(`/posts`);
    return data;
  } catch (err) {
    return console.error(err);
  }
};

export const getPostDetail = async (postId) => {
  try {
    const { data } = await baseInstance.get(`/post/${postId}`);
    return data;
  } catch (err) {
    return err;
  }
};

export const uploadPost = async (postData) => {
  try {
    const { data } = await baseInstance.post(`/post`, {
      title: postData.title,
      content: postData.content,
      image: postData.image,
    });
    return data;
  } catch (err) {
    return console.error(err);
  }
};

export const editPost = async (postData, postId) => {
  try {
    const { data } = await baseInstance.put(`/post/${postId}`, postData);
    return data;
  } catch (err) {
    return console.error(err);
  }
};

export const deletePost = async (postId) => {
  try {
    const { data } = await baseInstance.delete(`/post/${postId}`);
    return data;
  } catch (err) {
    return console.error(err);
  }
};
