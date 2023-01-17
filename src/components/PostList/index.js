import Component from "../../core/Component";
import PostItem from "../PostItem";

class PostList extends Component {
  template() {
    return `
      <ul class="post_list"></ul>
    `;
  }

  mounted() {
    const $postList = document.querySelector(".post_list");

    if (this.$props.posts) {
      this.$props.posts.map((post) => {
        new PostItem($postList, {
          post,
        });
      });
    }
  }
}

export default PostList;
