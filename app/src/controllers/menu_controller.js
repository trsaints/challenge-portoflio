const mainContent = document.querySelector("[data-element='main']");
const contactContent = document.querySelector("[data-element='contact']");
const footer = document.querySelector("[data-element='footer']");
const scrollBtn = document.querySelector("[data-element='scroll-btn']");

function toggleContent() {
  mainContent.classList.toggle("toggled");
  contactContent.classList.toggle("toggled");
  footer.classList.toggle("toggled");
  scrollBtn.classList.toggle("toggled");
}

function toggleMenu(element) {
  element.classList.toggle("toggled");
  toggleContent();
}

function escapeMenu(element, key) {
  if (key === "Escape") {
    if (element.classList.contains("toggled")) {
      element.classList.remove("toggled");
    }

    toggleContent();
  }
}

function exitMenu(element, target) {
  if (target.dataset.element !== "link") {
    return;
  }

  if (element.classList.contains("toggled")) {
    element.classList.remove("toggled");

    toggleContent();
  }

  let currentURL = target.getAttribute("href");
  scrollTo(currentURL);
}

function scrollTo(section) {
  window.location.href = section;
}

export const menuController = { toggleMenu, escapeMenu, exitMenu };
