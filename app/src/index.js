import { toggleMenu, escapeMenu, exitMenu } from "./services/menu_service.js";
import { setLinks } from "./services/dataset_service.js";
import { renderProjects } from "./controllers/project_controller.js";
import { scrollTop } from "./services/scroll_button_service.js";
import { formService } from "./services/form_service.js";

(() => {
  const menu = document.querySelector("[data-element='menu']");
  const navbar = document.querySelector("[data-element='navbar']");
  const navlinks = document.querySelector("[data-element='nav-links']");
  const projectsBtn = document.querySelector("[data-element='projects-btn']");
  const scrollBtn = document.querySelector("[data-element='scroll-btn']");

  menu.addEventListener("click", () => {
    toggleMenu(navbar);
  });

  document.addEventListener("keydown", (evt) => {
    escapeMenu(navbar, evt.key);
  });

  navlinks.addEventListener("click", (evt) => {
    exitMenu(navbar, evt.target);
  });

  projectsBtn.addEventListener("click", renderProjects);
  scrollBtn.addEventListener("click", scrollTop);

  setLinks();
  formService.setRequiredForm();
})();
