import { elementController } from "../controllers/element_controller.js";

export class Icon {
  #generate(name) {
    const icon = elementController.generateElement("i", "fa-solid")
    icon.classList.add(`fa-${name}`)
    icon.setAttribute("aria-hidden", true)

    return icon;
  }

  constructor(name) {
    return this.#generate(name)
  }
}