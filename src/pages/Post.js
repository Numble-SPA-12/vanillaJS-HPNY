import Header from "../components/Header";
import Component from "../core/Component";

class Post extends Component {
  template() {
    return `
    <main>
      <header class='header'>header</header>
      <div>글 상세 페이지</div>
      <div>글 내용</div>
    </main>
    `;
  }

  mounted() {
    const $header = document.querySelector(".header");

    new Header($header, {});
  }
}

export default Post;
