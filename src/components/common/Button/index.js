import Component from "../../../core/Component";

class Button extends Component {
  template() {
    if (this.$props.length) {
      const htmlStr = this.$props
        .map(
          ({ content, className }) => `
            <button class='button ${className}' data-button-content=${content}>${content}</button>
          `
        )
        .join("");
      return htmlStr;
    }

    const { content, className } = this.$props;
    return `
      <button class=button ${className}>${content}</button>
    `;
  }

  setEvent() {
    if (this.$props.length) {
      this.$props.forEach(({ className, onClick }) => {
        this.addEvent("click", `.${className.split(" ")[0]}`, () => {
          onClick();
        });
      });
      return;
    }

    const { onClick } = this.$props;
    this.addEvent("click", ".button", () => {
      onClick();
    });
  }
}

export default Button;
