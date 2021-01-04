import toastOverlayStyle from "./toast.overlay.component.css";

class ToastOverlayComponent extends HTMLElement {
  #window = window;
  #document = this.#window.document;

  #createStyles = css => {
    const style = this.#document.createElement("style");
    style.textContent = css;
    return style;
  };

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const styles = this.#createStyles(toastOverlayStyle);
    const slotElement = this.#document.createElement("slot");
    shadow.appendChild(styles);
    shadow.appendChild(slotElement);
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

if (!window.customElements.get("yyui-toast-overlay-component")) {
  window.customElements.define(
    "yyui-toast-overlay-component",
    ToastOverlayComponent
  );
}

export { ToastOverlayComponent };
