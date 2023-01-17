import Page from "../core/Page";

class NotFound extends Page {
  template() {
    return `
    <main>
      <div>404 페이지</div>
      <div>메인 페이지로 이동</div>
    </main>
    `;
  }
}

export default NotFound;
