export function setRequiredFields(form, target) {
  const formFields = form.querySelectorAll(target);

  formFields.forEach((field) => {
    const hasContent =
      field.querySelector("input") !== null ||
      field.querySelector("textarea") !== null;

    if (hasContent) {
      let input =
        field.querySelector("input") || field.querySelector("textarea");

      input.setAttribute("required", "");
    }
  });
}
