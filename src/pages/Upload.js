import Header from "../components/Header/index";
import Component from "../core/Component";

class Upload extends Component {
  template() {
    return `
    <main>
      <header class='header'>header</header>
      <div>글작성 페이지</div>
      <div>글 내용</div>
    </main>
    `;
  }

  mounted() {
    const $header = document.querySelector(".header");

    new Header($header, {});
  }
}

export default Upload;
