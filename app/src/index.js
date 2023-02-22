import {
  escapeMenu,
  exitMenu,
  observeNavigation,
  toggleMenu,
} from "./controllers/menu_controller.js";
import { renderProjects } from "./controllers/project_controller.js";
import { setRequiredFields } from "./controllers/form_controller.js";
import { configure, infosDB } from "./services/database_service.js";

function initialize() {
  const menuBtn = document.querySelector("[data-element='menu']");
  const navlinks = document.querySelector("[data-element='nav-links']");
  const projectsBtn = document.querySelector("[data-element='projects-btn']");
  const form = document.querySelector("[data-element='form']");

  menuBtn.addEventListener("click", toggleMenu);

  document.addEventListener("keydown", escapeMenu);

  navlinks.addEventListener("click", exitMenu);
  navlinks.addEventListener("click", observeNavigation);

  projectsBtn.addEventListener("click", renderProjects);

  setRequiredFields(form, "[data-element='form-field']");
}

if (infosDB.checkPreload()) {
  initialize();
} else {
  configure().then((_success) => initialize());
}
