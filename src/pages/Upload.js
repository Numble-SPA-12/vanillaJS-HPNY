import Header from "../components/common/Header/index";
import Page from "../core/Page";

class Upload extends Page {
  template() {
    return `
    <header class='header'></header>
    <main>
      <div>글작성 페이지</div>
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

export default Upload;
