import Header from "../components/Header";
import Component from "../core/Component";

class Post extends Component {
  template() {
    return `
    <header class='header'></header>
    <main>
      <div>상세글 페이지</div>
      <ul>글 내용</ul>
    </main>
    `;
  }

  mounted() {
    const $header = document.querySelector(".header");

    new Header($header, {});
  }
}

export default Post;
