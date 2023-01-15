import Header from "../components/common/Header/index";
import Component from "../core/Component";

class Upload extends Component {
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

    new Header($header);
  }
}

export default Upload;
