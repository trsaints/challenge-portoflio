function generateElement(elem, elemClass) {
  const currElement = document.createElement(elem);
  currElement.classList.add(elemClass);

  return currElement;
}

function clearContent(target) {
  while (target.firstChild) {
    target.removeChild(target.firstChild);
  }
}

function openLink(link, url) {
  link.addEventListener("click", () => {
    window.open(url);
  });
}

export const elementController = {
  generateElement,
  clearContent,
  openLink
}