import { getPostList } from "../../apis/post";
import Component from "../../core/Component";
import PostItem from "../PostItem";

class PostList extends Component {
  template() {
    return `
      <ul class="post_list_container"></ul>
    `;
  }

  setup() {
    this.$state = {};
    this.$getPostList();
  }

  async $getPostList() {
    const { data } = await getPostList();
    this.setState({ posts: data.posts });
  }

  mounted() {
    const $postList = document.querySelector(".post_list_container");

    if (this.$state) {
      new PostItem($postList, {
        posts: this.$state.posts,
      });
    }
  }
}

export default PostList;
