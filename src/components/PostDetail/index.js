import Component from "../../core/Component";

class postDetail extends Component {
  template() {
    if (this.$props.post) {
      const { image, title, createdAt, content } = this.$props.post;
      const convertedTime = this.getStringDate(new Date(createdAt));

      return `
        <img src=${image} alt="게시글 이미지"/>
        <strong class="post_detail_title">${title}</strong>
        <time datetime=${createdAt}>${convertedTime}</time>
        <p class="post_detail_content">${content}</p>
      `;
    }

    return ``;
  }

  getStringDate(date) {
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10) {
      month = `0${month}`;
    }

    if (day < 10) {
      day = `0${day}`;
    }

    return `${year}. ${month}. ${day}`;
  }
}

export default postDetail;
