import { getPostDetail, patchPost } from "../apis/post";
import { getRandomImage } from "../apis/unsplash";
import Button from "../components/common/Button";
import Header from "../components/common/Header";
import Input from "../components/common/Input";
import TextArea from "../components/common/TextArea";
import Page from "../core/Page";
import { navigateTo } from "../router";

import "../styles/edit.scss";

class Edit extends Page {
  template() {
    return `
    <header class='header'></header>
    <main>
      <section class='edit_data_container'>
      </section>
    </main>
    `;
  }

  async setup() {
    this.$params = window.location.pathname.split("/")[2];
    const data = await this.$getExistentData(this.$params);

    this.setState({
      title: data.title,
      content: data.content,
      image: data.image,
    });
  }

  async $getExistentData(postId) {
    const { data } = await getPostDetail(postId);
    return data.post;
  }

  mounted() {
    if (this.$state) {
      const { title, content, image } = this.$state;
      const isValidPost = !!title && !!content && !!image;
      const $header = document.querySelector(".header");
      const $editDataContainer = document.querySelector(".edit_data_container");

      new Header($header, {
        header: $header,
      });

      new Button($editDataContainer, {
        content: `<img src="${this.$state.image}" alt="" />`,
        className: "random_image_button",
        onClick: () => this.$handleImage(),
      });

      new Input($editDataContainer, {
        type: "text",
        placeholder: "제목을 입력하세요 !",
        value: title,
        className: "upload_title",
        onChange: (text) => this.$handleTitle(text),
      });

      new TextArea($editDataContainer, {
        name: "editContent",
        rows: 10,
        maxlength: 500,
        placeholder: "내용을 입력하세요 !",
        value: content,
        className: "upload_content",
        onChange: (text) => this.$handleContent(text),
      });

      new Button($editDataContainer, {
        content: "수정하기",
        disabled: !isValidPost,
        className: isValidPost ? "post_upload_button" : "invalid_button",
        onClick: () => this.$patchPost(),
      });
    }
  }

  async $handleImage() {
    const data = await getRandomImage();
    this.setState({ image: data.urls.full });
  }

  $handleTitle(text) {
    this.setState({ title: text });
  }

  $handleContent(text) {
    this.setState({ content: text });
  }

  async $patchPost() {
    const data = await patchPost(this.$state, this.$params);
    console.log(data);
    if (data.code === 200) {
      navigateTo(`/post/${this.$params}`);
    } else {
      alert(data.response.data.message);
    }
  }
}

export default Edit;
