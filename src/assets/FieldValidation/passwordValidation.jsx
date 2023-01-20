export const passwordValidation = (input, error) => {
    if (
      !input.value.match(/[A-Z]/) ||
      !input.value.match(/[a-z]/) ||
      !input.value.match(/[!@#\$%\^\&*\?';:)\(+=._-]/) ||
      !input.value.match(/[0-9]/)
    ) {
      error.innerText = "Password no valid";
      return true;
    } else {
      error.innerText = "";
      return false;
    }
  };