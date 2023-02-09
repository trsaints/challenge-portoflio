import { Icon } from "../components/Icon.js";
import { infosDB } from "../services/database_service.js";
import { elementController } from "./element_controller.js";

function createProjectCard(project) {
  const projectCard = elementController.generateElement("div", "main__project");
  const projectBanner = createProjectBanner(project.banner);
  const projectContent = createProjectContent(
    project.name,
    project.desc,
    project.repoURL,
    project.demoURL
  );

  projectCard.appendChild(projectBanner);
  projectCard.appendChild(projectContent);

  return projectCard;
}

function generateProjects(projects) {
  const projectsWrapper = document.querySelector(
    "[data-element='projects-list']"
  );

  elementController.clearContent(projectsWrapper);

  projects.forEach((project) => {
    let p = createProjectCard(project);
    setTimeout(() => {
      projectsWrapper.appendChild(p);
    }, 500);
  });
}

function createProjectBanner(src) {
  const projectBanner = elementController.generateElement(
    "img",
    "main__project__banner"
  );
  projectBanner.setAttribute("src", src);
  return projectBanner;
}

function createProjectContent(title, desc, repo, demo) {
  const projectContent = elementController.generateElement(
    "div",
    "main__project__content"
  );
  const projectTitle = elementController.generateElement(
    "h3",
    "main__project__title"
  );
  const projectDesc = elementController.generateElement(
    "p",
    "main__project__description"
  );
  const projectButtons = createProjectButtons(repo, demo);

  projectTitle.textContent = title;
  projectDesc.textContent = desc;

  projectContent.appendChild(projectTitle);
  projectContent.appendChild(projectDesc);
  projectContent.appendChild(projectButtons);

  return projectContent;
}

function createProjectButtons(repo, demo) {
  const options = elementController.generateElement(
    "menu",
    "main__project__options"
  );
  const repoAnchor = elementController.generateElement(
    "a",
    "main__project__link"
  );
  const demoAnchor = elementController.generateElement(
    "a",
    "main__project__link"
  );

  const srSpan = elementController.generateElement("span", "sr-only");
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

function renderProjects() {
  infosDB.loadAll("projects").then((projects) => generateProjects(projects));
}

export const projectController = { renderProjects };
