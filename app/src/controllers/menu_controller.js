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

  if (navbar.classList.contains("expanded")) return;

  const { href } = window.location;
  const hrefDelimiter = /#[a-zA-Z]+/;

  if (hrefDelimiter.test(href)) scrollController.scrollTo(href);
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
  const isExpanded = navbar.classList.contains("expanded");

  if (!isNavlink || !isExpanded) {
    return;
  }

  toggleMenu();

  const linkURL = target.getAttribute("href");
  scrollController.scrollTo(linkURL);
}

function observeNavigation(evt) {
  const { target } = evt;

  const navLinks = document.querySelectorAll("[data-link='navbar']");

  if (target.dataset.link === "navbar") {
    navLinks.forEach((navlink) => {
      const hasToBeChanged = navlink !== target && navlink.classList.contains("active")

      if (hasToBeChanged) navlink.classList.remove("active");
    });

    if (target.classList.contains("active")) return;

    target.classList.add("active");
  }
}

export const menuController = {
  toggleMenu,
  escapeMenu,
  exitMenu,
  observeNavigation,
};
