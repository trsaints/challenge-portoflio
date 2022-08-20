function setRequiredFields() {
  const formFields = document.querySelectorAll("[data-element='form-field']");

  formFields.forEach((field) => {
    if (
      field.querySelector("input") !== null ||
      field.querySelector("textarea") !== null
    ) {
      let formElement =
        field.querySelector("input") || field.querySelector("textarea");

      formElement.setAttribute("required", "");
    }
  });
}

export const formController = {
  setRequiredFields,
};
