import Header from "../components/common/Header";
import Page from "../core/Page";

class Edit extends Page {
  template() {
    return `
    <header class='header'></header>
    <main>
      <div>글수정 버튼</div>
      <ul>글 내용</ul>
    </main>
    `;
  }
  mounted() {
    const $header = document.querySelector(".header");

    new Header($header, {
      header: $header,
    });
  }
}

export default Edit;
