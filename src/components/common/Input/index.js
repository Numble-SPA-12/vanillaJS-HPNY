import Component from "../../../core/Component";

class Input extends Component {
  template() {
    const { type, placeholder, className } = this.$props;
    return `<input type=${type} class="${
      className ? className : "input"
    }" placeholder="${placeholder}"/>`;
  }

  setEvent() {
    const { onChange, className } = this.$props;
    this.addEvent(
      "change",
      className ? `.${className.split(" ")[0]}` : ".input",
      (e) => {
        onChange(e.target.value);
      }
    );
  }
}

export default Input;
