import { menuController } from "./controllers/menu_controller.js";
import { datasetController } from "./controllers/dataset_controller.js";
import { projectController } from "./controllers/project_controller.js";
import { scrollController } from "./controllers/scroll_controller.js";
import { formController } from "./controllers/form_controller.js";
import { configure, infosDB } from "./services/database_service.js";

function startApp() {
  const menuBtn = document.querySelector("[data-element='menu']");
  const navlinks = document.querySelector("[data-element='nav-links']");
  const projectsBtn = document.querySelector("[data-element='projects-btn']");
  const scrollBtn = document.querySelector("[data-element='scroll-btn']");

  menuBtn.addEventListener("click", () => {
    menuController.toggleMenu();
  });

  document.addEventListener("keydown", (evt) => {
    menuController.escapeMenu(evt.key);
  });

  navlinks.addEventListener("click", (evt) => {
    menuController.exitMenu(evt.target);
  });

  projectsBtn.addEventListener("click", projectController.renderProjects);
  scrollBtn.addEventListener("click", () => {
    scrollController.scrollTo("#main");
  });

  datasetController.setDataLink();
  formController.setRequiredFields();
}

(() => {
  if (infosDB.checkPreload()) {
    startApp();
  } else {
    configure().then((_success) => startApp());
  }
})();
