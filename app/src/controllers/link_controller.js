function openLink(link, url) {
  link.addEventListener("click", () => {
    window.open(url);
  });
}

export const linkController = {
  openLink,
};
