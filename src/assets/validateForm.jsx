import { minLengthValidation } from '../assets/FieldValidation/minLength';
import { maxLengthValidation } from '../assets/FieldValidation/maxLength';
import { anyDigits } from '../assets/FieldValidation/anyDigits'
import { anySpecialChar } from '../assets/FieldValidation/anySpecialChar';
import { dateValidation } from '../assets/FieldValidation/dateValidation';
import { postalValidation } from '../assets/FieldValidation/postalValidation';
import { passwordValidation } from '../assets/FieldValidation/passwordValidation';
import { passwordConfirmValidation } from '../assets/FieldValidation/passwordConfirmValidation';


export const validateForm = (id) => {
  let minLength = 2;
  let maxLength = 30;
  const tab = document.body.querySelector(`.${id}`);
  if (tab) {
    const fieldsets = tab.querySelectorAll("fieldset");
    for (const field of fieldsets) {
      const title = field.querySelector("legend");
      const input = field.querySelector("input");
      const error = field.querySelector("small");
      switch (field.className) {
        case "street":
          if (minLengthValidation(minLength, title, input, error)) return false;
          if (maxLengthValidation(maxLength, title, input, error)) return false;
          if (anySpecialChar(title, input, error)) return false;
          break;
        case "login":
          if (minLengthValidation(minLength, title, input, error)) return false;
          if (maxLengthValidation(maxLength, title, input, error)) return false;
          if (anySpecialChar(title, input, error)) return false;
          break;
        case "email":
          if (minLengthValidation(minLength, title, input, error)) return false;
          if (maxLengthValidation(maxLength, title, input, error)) return false;
          break;
        case "date":
          if (dateValidation(title, input, error)) return false;
          if (input.value === "") {
            error.innerText = "Fill up date";
            return false;
          } else {
            error.innerText = "";
          }
          break;
        case "postal":
          minLength = 6;
          if (postalValidation(minLength, input, error)) return false;
          break;
        case "password":
          minLength = 6;
          if (minLengthValidation(minLength, title, input, error)) return false;
          if (passwordValidation(input, error)) return false;
          break;
        case "password-confirm":
          if (passwordConfirmValidation(input, error)) return false;
          break;
        default:
          if (minLengthValidation(minLength, title, input, error)) return false;
          if (maxLengthValidation(maxLength, title, input, error)) return false;
          if (anyDigits(title, input, error)) return false;
          if (anySpecialChar(title, input, error)) return false;
      }
    }
  }
  return true;
};