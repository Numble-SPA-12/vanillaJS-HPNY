import { getPostDetail } from "../apis/post";
import Button from "../components/common/Button";
import Header from "../components/common/Header";
import Input from "../components/common/Input";
import TextArea from "../components/common/TextArea";
import Page from "../core/Page";

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
    const data = await this.$getExistentData(
      window.location.pathname.split("/")[2]
    );

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
        // onClick: () => this.$handleImage(),
      });
      new Input($editDataContainer, {
        type: "text",
        placeholder: "제목을 입력하세요 !",
        value: title,
        className: "upload_title",
        // onChange: (text) => this.$handleTitle(text),
      });
      new TextArea($editDataContainer, {
        name: "uploadContent",
        rows: 10,
        maxlength: 500,
        placeholder: "내용을 입력하세요 !",
        value: content,
        className: "upload_content",
        // onChange: (text) => this.$handleContent(text),
      });
      new Button($editDataContainer, {
        content: "업로드",
        disabled: !isValidPost,
        className: isValidPost ? "post_upload_button" : "invalid_button",
        // onClick: () => this.$createPost(),
      });
    }
  }
}

export default Edit;
