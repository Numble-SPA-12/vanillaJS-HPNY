import Button from "../components/common/Button";
import Page from "../core/Page";

import "../styles/notFound.scss";
import notFoundImage from "../assets/empty_cat.jpg";
import { navigateTo } from "../router";

class NotFound extends Page {
  template() {
    return `
    <main>
      <div class="notfound_page_container">
        <img src="${notFoundImage}" alt="notFound Page Image"/>
        <p>페이지를 찾을 수 없습니다.</p>
      </div>
    </main>
    `;
  }

  mounted() {
    const notFoundPageContainer = document.querySelector(
      ".notfound_page_container"
    );

    new Button(notFoundPageContainer, {
      content: "메인 페이지로 이동하기",
      onClick: this.$goToHome,
    });
  }

  $goToHome() {
    navigateTo("/");
  }
}

export default NotFound;
