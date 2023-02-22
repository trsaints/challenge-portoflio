import {
  escapeMenu,
  exitMenu,
  observeNavigation,
  toggleMenu,
} from "./views/menu_view.js";
import { renderProjects } from "./views/project_view.js";
import { setRequiredFields } from "./views/form_view.js";
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
