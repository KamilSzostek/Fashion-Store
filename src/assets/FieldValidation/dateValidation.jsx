export const dateValidation = (title, input, error) => {
    const minAge = 18;
    const maxAge = 120;
    const date = new Date();
    const minDate = new Date(
      date.getFullYear() - minAge,
      date.getMonth(),
      date.getDate()
    );
    const maxDate = new Date(
      date.getFullYear() - maxAge,
      date.getMonth(),
      date.getDate()
    );

    const inputArr = input.value.split("-");
    const inputDate = new Date(inputArr[0], inputArr[1], inputArr[2]);
    if (minDate < inputDate || maxDate > inputDate) {
      error.innerText = `${title.innerText} is no valid`;
      return true;
    } else {
      error.innerText = "";
      return false;
    }
  };