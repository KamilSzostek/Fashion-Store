export const anySpecialChar = (title, input, error) => {
    const regex = /[!@#\$%\^\&*\?';:)\(+=._-]/;
    if (regex.exec(input.value) != null && regex.exec(input.value).length > 0) {
      error.innerText = `${title.innerText} can't contain special chars`;
      return true;
    } else {
      error.innerText = "";
      return false;
    }
  };