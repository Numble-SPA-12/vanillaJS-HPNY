import Button from "../components/common/Button";
import Header from "../components/common/Header/index";
import Input from "../components/common/Input";
import TextArea from "../components/common/TextArea";
import Page from "../core/Page";

import "../styles/upload.scss";

class Upload extends Page {
  template() {
    return `
    <header class='header'></header>
    <main>
      <section class='upload_data_container'></section>
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
    const $header = document.querySelector(".header");
    const $uploadDataContainer = document.querySelector(
      ".upload_data_container"
    );
    new Header($header, {
      header: $header,
    });
    new Button($uploadDataContainer, {
      content: "랜덤 이미지 생성",
      className: "random_image_button",
      onClick: () => console.log("랜덤 이미지 생성 버튼"),
    });
    new Input($uploadDataContainer, {
      type: "text",
      placeholder: "제목을 입력하세요 !",
      className: "upload_title",
      onChange: () => console.log("title~~"),
    });
    new TextArea($uploadDataContainer, {
      name: "uploadContent",
      rows: 10,
      maxlength: 500,
      placeholder: "내용을 입력하세요 !",
      className: "upload_content",
      onChange: () => console.log("content~~"),
    });
    new Button($uploadDataContainer, {
      content: "업로드",
      className: "post_upload_button",
      onClick: () => console.log("업로드 버튼"),
    });
  }

  handleTitle(text) {
    this.$state.title = text;
  }

  handleContent(text) {
    this.$state.content = text;
  }
}

export default Upload;
