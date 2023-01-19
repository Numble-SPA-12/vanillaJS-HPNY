import Component from "../../../core/Component";

class Input extends Component {
  template() {
    const { type, placeholder, className, value } = this.$props;
    return `<input type=${type} class="${
      className ? className : "input"
    }" placeholder="${placeholder}" value=${value} >`;
  }

  setEvent() {
    const { onChange, className } = this.$props;
    this.addEvent(
      "change",
      className ? `.${className.split(" ")[0]}` : ".input",
      (e) => {
        onChange(this.escape(e.target.value));
      }
    );
  }
}

export default Input;
