export const postalValidation = (min, input, error) => {
    if (input.value.length < min) {
        error.innerText = `Postal code must have ${min - 1} digits`;
        return true;
    } else {
        error.innerText = "";
        return false;
    }
};