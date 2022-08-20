import { menuController } from "./controllers/menu_controller.js";
import { datasetController } from "./controllers/dataset_controller.js";
import { projectController } from "./controllers/project_controller.js";
import { scrollTop } from "./services/scroll_button_service.js";
import { formController } from "./controllers/form_controller.js";

(() => {
  const menu = document.querySelector("[data-element='menu']");
  const navbar = document.querySelector("[data-element='navbar']");
  const navlinks = document.querySelector("[data-element='nav-links']");
  const projectsBtn = document.querySelector("[data-element='projects-btn']");
  const scrollBtn = document.querySelector("[data-element='scroll-btn']");

  menu.addEventListener("click", () => {
    menuController.toggleMenu(navbar);
  });

  document.addEventListener("keydown", (evt) => {
    menuController.escapeMenu(navbar, evt.key);
  });

  navlinks.addEventListener("click", (evt) => {
    menuController.exitMenu(navbar, evt.target);
  });

  projectsBtn.addEventListener("click", projectController.renderProjects);
  scrollBtn.addEventListener("click", scrollTop);

  datasetController.setDataLink();
  formController.setRequiredFields();
})();
