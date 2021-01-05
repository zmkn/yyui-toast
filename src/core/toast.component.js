import toastStyle from "./toast.component.css";
import toastTemplate from "./toast.component.html";

class ToastComponent extends HTMLElement {
  #window = window;
  #document = this.#window.document;

  #createStyles = css => {
    const style = this.#document.createElement("style");
    style.textContent = css;
    return style;
  };

  #createElements = html => {
    const wrapper = this.#document.createElement("template");
    wrapper.innerHTML = html;
    return wrapper.content.cloneNode(true);
  };

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const styles = this.#createStyles(toastStyle);
    const elements = this.#createElements(toastTemplate);
    shadow.appendChild(styles);
    shadow.appendChild(elements);
  }

  self() {
    return this;
  }

  parent() {
    return this.parentNode;
  }

  getValue(name) {
    name = `#__${name}`;
    return this[name];
  }

  setValue(name, value) {
    name = `#__${name}`;
    this[name] = value;
  }
}

if (!window.customElements.get("yyui-toast-component")) {
  window.customElements.define("yyui-toast-component", ToastComponent);
}

export { ToastComponent };
