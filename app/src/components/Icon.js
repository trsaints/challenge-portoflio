import { generateElement } from "../views/dom_view.js";

export class Icon {
  constructor(name) {
    return this.#generate(name);
  }

  #generate(name) {
    const icon = generateElement("i", "fa-solid");
    icon.classList.add(`fa-${name}`);
    icon.setAttribute("aria-hidden", true);

    return icon;
  }
}
