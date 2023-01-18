import Component from "../../../core/Component";

class Button extends Component {
  template() {
    const { content, className } = this.$props;
    return `
      <button class="${className ? className : "button"}">${content}</button>
    `;
  }

  setEvent() {
    const { onClick, className } = this.$props;
    this.addEvent(
      "click",
      className ? `.${className.split(" ")[0]}` : ".button",
      (e) => {
        e.preventDefault();
        onClick();
      }
    );
  }
}

export default Button;
