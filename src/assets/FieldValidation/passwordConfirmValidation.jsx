export const passwordConfirmValidation = (input, error) => {
  const parent = input.parentNode;
  const password = parent.previousSibling.querySelector('input').value;
  if (password !== input.value) {
    error.innerText = "Passwords not equal";
    return true;
  } else {
    error.innerHtml = "";
    return false;
  }
};