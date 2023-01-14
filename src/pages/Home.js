import Header from "../components/Header/index";
import Component from "../core/Component";

class Home extends Component {
  template() {
    return `
    <main>
      <header class='header'></header>
      <div>글작성 버튼</div>
      <ul>글 목록</ul>
    </main>
    `;
  }

  mounted() {
    const $header = document.querySelector(".header");

    new Header($header, {});
  }
}

export default Home;
