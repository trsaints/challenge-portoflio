import { generateElement } from "../views/dom_view.js";
import { Icon } from "./Icon.js";

export default class Card {
  constructor(project) {
    return this.#generate(project);
  }

  #generate({ name, desc, banner, repoURL, demoURL }) {
    const projectCard = generateElement("div", "list__project");
    const projectBanner = this.#generateBanner(banner);
    const projectContent = this.#generateContent(name, desc, repoURL, demoURL);

    projectCard.appendChild(projectBanner);
    projectCard.appendChild(projectContent);

    return projectCard;
  }

  #generateBanner(src) {
    const projectBanner = generateElement("img", "project__banner");
    projectBanner.setAttribute("src", src);
    return projectBanner;
  }

  #generateContent(name, desc, repo, demo) {
    const projectContent = generateElement("div", "project__content");
    const projectTitle = generateElement("h3", "content__title");
    const projectDesc = generateElement("p", "content__description");
    const projectButtons = this.#generateButtons(repo, demo);

    projectTitle.textContent = name;
    projectDesc.textContent = desc;

    projectContent.appendChild(projectTitle);
    projectContent.appendChild(projectDesc);
    projectContent.appendChild(projectButtons);

    return projectContent;
  }

  #generateButtons(repo, demo) {
    const options = generateElement("menu", "content__options");
    const repoAnchor = generateElement("a", "options__link");
    const demoAnchor = generateElement("a", "options__link");

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
