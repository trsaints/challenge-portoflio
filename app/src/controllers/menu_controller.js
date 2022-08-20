import { scrollController } from "./scroll_controller.js";

const navlinks = document.querySelector("[data-element='nav-links']");
const navbar = document.querySelector("[data-element='navbar']");
const mainContent = document.querySelector("[data-element='main']");
const contactContent = document.querySelector("[data-element='contact']");
const footer = document.querySelector("[data-element='footer']");
const scrollBtn = document.querySelector("[data-element='scroll-btn']");

function toggleMenu() {
  mainContent.classList.toggle("toggled");
  contactContent.classList.toggle("toggled");
  footer.classList.toggle("toggled");
  scrollBtn.classList.toggle("toggled");

  navbar.classList.toggle("expanded");
}

function escapeMenu(key) {
  if (key !== "Escape") {
    return;
  }

  if (navbar.classList.contains("expanded")) {
    toggleMenu();
  }
}

function exitMenu(target) {
  const isNavlink = target.parentNode === navlinks;

  if (!isNavlink) {
    return;
  }

  toggleMenu();

  const linkURL = target.getAttribute("href");
  scrollController.scrollTo(linkURL);
}

export const menuController = { toggleMenu, escapeMenu, exitMenu };
