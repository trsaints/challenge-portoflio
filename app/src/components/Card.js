import { generateElement } from "../controllers/dom_controller.js";
import { Icon } from "./Icon.js";

export default class Card {
  constructor(project) {
    return this.#generate(project);
  }

  #generate({ name, desc, banner, repoURL, demoURL }) {
    const projectCard = generateElement("div", "main__project");
    const projectBanner = this.#generateBanner(banner);
    const projectContent = this.#generateContent(name, desc, repoURL, demoURL);

    projectCard.appendChild(projectBanner);
    projectCard.appendChild(projectContent);

    return projectCard;
  }

  #generateBanner(src) {
    const projectBanner = generateElement("img", "main__project__banner");
    projectBanner.setAttribute("src", src);
    return projectBanner;
  }

  #generateContent(name, desc, repo, demo) {
    const projectContent = generateElement("div", "main__project__content");
    const projectTitle = generateElement("h3", "main__project__title");
    const projectDesc = generateElement("p", "main__project__description");
    const projectButtons = this.#generateButtons(repo, demo);

    projectTitle.textContent = name;
    projectDesc.textContent = desc;

    projectContent.appendChild(projectTitle);
    projectContent.appendChild(projectDesc);
    projectContent.appendChild(projectButtons);

    return projectContent;
  }

  #generateButtons(repo, demo) {
    const options = generateElement("menu", "main__project__options");
    const repoAnchor = generateElement("a", "main__project__link");
    const demoAnchor = generateElement("a", "main__project__link");

    const srSpan = generateElement("span", "sr-only");
    const spanText = document.createTextNode("Ver ");
    srSpan.appendChild(spanText);
    
    const linkIcon = new Icon("square-arrow-up-right");

    const repoText = document.createTextNode("Repositório");
    const demoText = document.createTextNode("Demo");

    repoAnchor.appendChild(srSpan);
    demoAnchor.appendChild(srSpan.cloneNode());
    repoAnchor.appendChild(repoText);
    demoAnchor.appendChild(demoText);
    repoAnchor.appendChild(linkIcon);
    demoAnchor.appendChild(linkIcon.cloneNode());

    repoAnchor.setAttribute("href", repo);
    demoAnchor.setAttribute("href", demo);
    repoAnchor.setAttribute("target", "_blank");
    demoAnchor.setAttribute("target", "_blank");

    options.appendChild(repoAnchor);
    options.appendChild(demoAnchor);

    return options;
  }
}
