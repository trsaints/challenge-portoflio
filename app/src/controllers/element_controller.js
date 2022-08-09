export function generateElement(elem, elemClass) {
  const currElement = document.createElement(elem);
  currElement.classList.add(elemClass);

  return currElement;
}
