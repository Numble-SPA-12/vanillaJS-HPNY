import Header from "../components/Header/index";
import Component from "../core/Component";

class Home extends Component {
  template() {
    return `
    <header class='header' style="justify-content:flex-end"></header>
    <main>
      <div>홈페이지</div>
      <ul>글 목록</ul>
    </main>
    `;
  }

  mounted() {
    const $header = document.querySelector(".header");

    new Header($header);
  }
}

export default Home;
