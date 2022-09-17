import { checkSchema } from "express-validator";

import {
  ERROR_EMAIL_VALID_LOGIN,
  ERROR_NAME_VALID_PASSWORD,
  ERROR_LENGTH_PASSWORD,
  ERROR_VALID_EMAIL_LOGIN,
} from "../errorsMessages/validationErrors.js";

const emailOpation = {
  isEmpty: {
    negated: true,
    errorMessage: ERROR_EMAIL_VALID_LOGIN,
  },
  isEmail: {
    errorMessage: ERROR_VALID_EMAIL_LOGIN,
  },
};

const passwordOpation = {
  isEmpty: {
    negated: true,
    errorMessage: ERROR_NAME_VALID_PASSWORD,
  },
  isLength: {
    min: 5,
    errorMessage: ERROR_LENGTH_PASSWORD,
  },
};

export const loginUserValidation = checkSchema({
  email: emailOpation,
  password: passwordOpation,
});
