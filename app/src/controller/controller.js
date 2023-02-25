export function initialize(deps) {
  const getCallback = (name, args = null) => {
    if (args) deps.callbacks[name](args);
    else {
      deps.callbacks[name]();
    }
  };

  const menuBtn = document.querySelector("[data-element='menu']");
  const navlinks = document.querySelector("[data-element='nav-links']");
  const projectsBtn = document.querySelector("[data-element='projects-btn']");

  menuBtn.addEventListener("click", () => getCallback("toggleMenu"));
  document.addEventListener("keydown", (evt) => getCallback("escapeMenu", evt));
  navlinks.addEventListener("click", (evt) => getCallback("exitMenu", evt));
  navlinks.addEventListener("click", (evt) =>
    getCallback("observeNavigation", evt)
  );

  projectsBtn.addEventListener("click", () =>
    getCallback("generateProjects", deps)
  );
}
