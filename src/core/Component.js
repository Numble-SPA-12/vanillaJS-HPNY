import Page from "./Page";

class Component extends Page {
  render() {
    if (this.template().length > 0)
      this.$target.appendChild(this.parseNodeFromString(this.template()));
    this.mounted();
  }

  parseNodeFromString(htmlString) {
    const domParser = new DOMParser();

    const node = domParser.parseFromString(htmlString, "text/html").body
      .firstChild;

    node.normalize();

    return node;
  }
}

export default Component;
