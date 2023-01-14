import Component from "../../core/Component";

class Button extends Component {
  template() {
    console.log(this.$props);
    const { content, className } = this.$props;

    return `
      <button class='button ${className}'>${content}</button>
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
