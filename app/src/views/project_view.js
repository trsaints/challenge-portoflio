export function generateProjects({projects, callbacks, Component}) {
  const projectsWrapper = document.querySelector(
    "[data-element='projects-list']"
  );

  callbacks.clearContent(projectsWrapper);

  projects.forEach((project) =>
    setTimeout(() => projectsWrapper.appendChild(new Component(project)), 100)
  );
}
