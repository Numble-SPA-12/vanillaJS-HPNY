import { uploadPost } from "../apis/post";
import { getRandomImage } from "../apis/unsplash";
import Button from "../components/common/Button";
import Header from "../components/common/Header/index";
import Input from "../components/common/Input";
import TextArea from "../components/common/TextArea";
import Page from "../core/Page";
import { navigateTo } from "../router";

import "../styles/upload.scss";

class Upload extends Page {
  template() {
    return `
    <header class='header'></header>
    <main>
      <section class='upload_data_container'>
      </section>
    </main>
    `;
  }

  setup() {
    this.$state = {
      title: "",
      content: "",
      image: "",
    };
  }

  mounted() {
    const { title, content, image } = this.$state;
    const isValidPost = !!title && !!content && !!image;

    const $header = document.querySelector(".header");
    const $uploadDataContainer = document.querySelector(
      ".upload_data_container"
    );

    new Header($header, {
      header: $header,
    });

    new Button($uploadDataContainer, {
      content: "랜덤 이미지 생성",
      className: !image ? "random_image_button" : "completed_button",
      onClick: () => this.$handleImage(),
    });

    new Input($uploadDataContainer, {
      type: "text",
      placeholder: "제목을 입력하세요 !",
      value: title,
      className: "upload_title",
      onChange: (text) => this.$handleTitle(text),
    });

    new TextArea($uploadDataContainer, {
      name: "uploadContent",
      rows: 10,
      maxlength: 500,
      placeholder: "내용을 입력하세요 !",
      value: content,
      className: "upload_content",
      onChange: (text) => this.$handleContent(text),
    });

    new Button($uploadDataContainer, {
      content: "업로드",
      disabled: !isValidPost,
      className: isValidPost ? "post_upload_button" : "invalid_button",
      onClick: () => this.$createPost(),
    });
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

  async $createPost() {
    const data = await uploadPost(this.$state);

    if (data.code === 201) {
      navigateTo("/");
    } else {
      alert(data.response.data.message);
    }
  }
}

export default Upload;
