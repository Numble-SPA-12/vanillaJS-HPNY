import Component from "../../../core/Component";

class Input extends Component {
  template() {
    const { type, placeholder, className } = this.$props;
    return `<input type=${type} class="input ${className}" placeholder="${placeholder}"/>`;
  }

  setEvent() {
    const { onChange } = this.$props;
    this.addEvent("change", ".input", (e) => {
      onChange(e.target.value);
    });
  }
}

export default Input;
