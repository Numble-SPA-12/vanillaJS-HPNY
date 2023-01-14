import Header from "../components/Header";
import Component from "../core/Component";

class Edit extends Component {
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

    new Header($header, {});
  }
}

export default Edit;
