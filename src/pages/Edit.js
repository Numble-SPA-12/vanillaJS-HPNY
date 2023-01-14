import Component from "../core/Component";

class Edit extends Component {
  template() {
    return `
    <main>
      <header class='header'>header</header>
      <div>글 수정</div>
      <div>글 내용</div>
    </main>
    `;
  }
}

export default Edit;
