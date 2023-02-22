export function scrollTo(section = "") {
  if (section) window.location.href = section;
  else {
    window.location.href = "#main";
  }
}
