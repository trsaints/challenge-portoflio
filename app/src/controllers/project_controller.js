import { infosDB } from "../services/database_service.js";
import { clearContent } from "./dom_controller.js";
import Card from "../components/Card.js";

function generateProjects(projects) {
  const projectsWrapper = document.querySelector(
    "[data-element='projects-list']"
  );

  clearContent(projectsWrapper);

  projects.forEach((project) =>
    setTimeout(() => projectsWrapper.appendChild(new Card(project)), 200)
  );
}

export function renderProjects() {
  infosDB.loadAll("projects").then((projects) => generateProjects(projects));
}
