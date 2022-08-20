import { projectService } from "../services/projects_service.js";
import { elementController } from "./element_controller.js";
import { linkController } from "./link_controller.js";

function createProjectCard(project) {
  const projectCard = elementController.generateElement("div", "main__project");
  const projectBanner = createProjectBanner(project.banner);
  const projectContent = createProjectContent(
    project.title,
    project.description,
    project.repository,
    project.demo
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
  const buttons = elementController.generateElement(
    "div",
    "main__project__buttons"
  );
  const repoBtn = elementController.generateElement(
    "button",
    "main__project__button"
  );
  const demoBtn = elementController.generateElement(
    "button",
    "main__project__button"
  );

  repoBtn.textContent = "Repositório";
  buttons.appendChild(repoBtn);

  demoBtn.textContent = "Ver Demo";
  buttons.appendChild(demoBtn);

  linkController.openLink(repoBtn, repo);
  linkController.openLink(demoBtn, demo);

  return buttons;
}

function renderProjects() {
  projectService.getProjects().then((projects) => {
    generateProjects(projects);
  });
}

export const projectController = { renderProjects };
