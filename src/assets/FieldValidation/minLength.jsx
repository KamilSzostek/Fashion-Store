export const minLengthValidation = (min, title, input, error) => {
  if (input.value.length < min) {
    error.innerText = `${title.innerText} must have at least ${min} signs`;
    return true;
  } else {
    error.innerText = "";
    return false;
  }
};