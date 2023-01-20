export const anyDigits = (title, input, error) => {
    const regex = /[0-9]/;
    if (regex.test(input.value)) {
      error.innerText = `${title.innerText} can't contain digits`;
      return true;
    } else {
      error.innerText = "";
      return false;
    }
  };