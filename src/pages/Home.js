import Component from "../core/Component.js";

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
}

export default Home;
