import instance from "./instance";

export const getPostList = async () => {
  try {
    const { data } = await instance.get(`/posts`);
    return data;
  } catch (err) {
    return console.error(err);
  }
};

export const getPostDetail = async (postId) => {
  try {
    const { data } = await instance.get(`/post/${postId}`);
    return data;
  } catch (err) {
    return console.error(err);
  }
};

export const uploadPost = async (postData) => {
  try {
    const { data } = await instance.post(`/post`, postData);
    return data;
  } catch (err) {
    return console.error(err);
  }
};

export const editPost = async (postData, postId) => {
  try {
    const { data } = await instance.put(`/post/${postId}`, postData);
    return data;
  } catch (err) {
    return console.error(err);
  }
};

export const deletePost = async (postId) => {
  try {
    const { data } = await instance.delete(`/post/${postId}`);
    return data;
  } catch (err) {
    return console.error(err);
  }
};
