import { ToastComponent } from "./toast.component.js";
import { ToastOverlayComponent } from "./toast.overlay.component.js";

export class Toast {
  #window = window;
  #document = this.#window.document;

  #components = [];

  #addComponents = component => {
    this.#components.push(component);
  };

  #options = {
    duration: 3000,
    position: "center",
    animation: "default",
    overlay: false
  };

  components = this.#components;

  static options = {
    duration: 3000,
    position: "center",
    animation: "default",
    overlay: false
  };

  static clear = () => {
    const instanceAll = Toast.instanceAll;
    while (instanceAll.length > 0) {
      instanceAll[0].clear();
      instanceAll.splice(0, 1);
    }
  };

  static instanceAll = [];

  constructor(options = {}) {
    this.#options = Object.assign(this.#options, Toast.options, options);
    Toast.instanceAll.push(this);
  }

  clear() {
    const components = this.#components;
    while (components.length > 0) {
      this.unmount(components[0]);
      components.splice(0, 1);
    }
  }

  create(content = "", { mounted, unmounted, beforeMount } = {}) {
    const toastElement = new ToastComponent();
    const animationName = this.#options.animation;
    const positionClassName = `toast-${this.#options.position}`;
    mounted || (mounted = () => { });
    unmounted || (unmounted = () => { });
    beforeMount || (beforeMount = () => { });
    toastElement.innerHTML = content;
    toastElement.setAttribute("class", positionClassName);
    if (this.#options.overlay) {
      let overlayName = this.#options.overlay;
      const toastOverlayElement = new ToastOverlayComponent();
      if ({}.toString.call(overlayName) !== "[object String]") {
        overlayName = "default";
      }
      toastOverlayElement.setValue("mounted", mounted);
      toastOverlayElement.setValue("unmounted", unmounted);
      toastOverlayElement.setValue("beforeMount", beforeMount);
      toastOverlayElement.setAttribute("class", `toast-overlay-${overlayName}`);
      animationName &&
        toastOverlayElement.setAttribute("animation", animationName);
      toastOverlayElement.appendChild(toastElement);
      this.#addComponents(toastOverlayElement);
      return toastOverlayElement;
    } else {
      toastElement.setValue("mounted", mounted);
      toastElement.setValue("unmounted", unmounted);
      toastElement.setValue("beforeMount", beforeMount);
      animationName && toastElement.setAttribute("animation", animationName);
      this.#addComponents(toastElement);
      return toastElement;
    }
  }

  mount(toastElement) {
    if (!toastElement.parent()) {
      const animationName = this.#options.animation;
      toastElement.getValue("beforeMount")();
      if (animationName) {
        toastElement.setAttribute("animation-route", "create");
        toastElement.addEventListener(
          "animationend",
          () => {
            toastElement.getValue("mounted")();
          },
          {
            once: true
          }
        );
        this.#document.body.appendChild(toastElement);
      } else {
        this.#document.body.appendChild(toastElement);
        toastElement.getValue("mounted")();
      }
      if (this.#options.duration > 0) {
        const timestamp = setTimeout(() => {
          clearTimeout(timestamp);
          this.unmount(toastElement);
        }, this.#options.duration);
      }
    }
  }

  unmount(toastElement) {
    if (toastElement.parent()) {
      const animationName = this.#options.animation;
      if (animationName) {
        toastElement.setAttribute("animation-route", "remove");
        toastElement.addEventListener(
          "animationend",
          () => {
            toastElement.parent().removeChild(toastElement);
            toastElement.getValue("unmounted")();
          },
          {
            once: true
          }
        );
      } else {
        toastElement.parent().removeChild(toastElement);
        toastElement.getValue("unmounted")();
      }
    }
  }

  isMount(toastElement) {
    return !!toastElement.parent();
  }
}
