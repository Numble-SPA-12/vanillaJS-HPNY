import Component from "../../../core/Component";

class TextArea extends Component {
  template() {
    const { name, rows, placeholder, maxlength, className } = this.$props;
    return `<textarea name=${name} placeholder="${placeholder}" rows=${rows}, class="${
      className ? className : "textarea"
    }" maxlength=${maxlength}></textarea>`;
  }

  setEvent() {
    const { onChange, className } = this.$props;
    this.addEvent(
      "change",
      className ? `.${className.split(" ")[0]}` : ".textarea",
      (e) => {
        onChange(e.target.value);
      }
    );
  }
}

export default TextArea;
