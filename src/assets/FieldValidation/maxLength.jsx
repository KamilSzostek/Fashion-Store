export const maxLengthValidation = (max, title, input, error) => {
  if (input.value.length > max) {
    error.innerText = `${title.innerText} can't have more than ${max} signs`;
    return true;
  } else {
    error.innerText = "";
    return false;
  }
};