function clearContent(target) {
  while (target.firstChild) {
    target.removeChild(target.firstChild);
  }
}

export const elementService = {
  clearContent,
};
