import Component from "../../core/Component";

class Button extends Component {
  template() {
    const { content } = this.$props;

    return `
      <button class='button'>${content}</button>
    `;
  }

  setEvent() {
    const { onClick } = this.$props;
    this.addEvent("click", ".button", () => {
      onClick();
    });
  }
}

export default Button;
