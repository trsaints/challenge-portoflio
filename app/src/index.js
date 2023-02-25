import {
  escapeMenu,
  exitMenu,
  observeNavigation,
  toggleMenu,
} from "./views/menu_view.js";
import { generateProjects } from "./views/project_view.js";
import { configureDB, infosDB } from "./services/database_service.js";
import { clearContent } from "./views/dom_view.js";
import { initialize } from "./controller/controller.js";
import Card from "./components/Card.js";

if (!infosDB.checkPreload()) {
  try {
    await configureDB()
  } catch (error) {
    console.error(error)
  }
};

const dependencies = {
  projects: await infosDB.loadAll("projects"),
  callbacks: {
    clearContent,
    toggleMenu,
    escapeMenu,
    exitMenu,
    observeNavigation,
    generateProjects,
  },
  Component: Card,
};

initialize(dependencies)