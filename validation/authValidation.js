import { checkSchema } from "express-validator";
import {
  ERROR_EMAIL,
  ERROR_PASSWORD,
  ERROR_NAME,
  ERROR_VALID_EMAIL,
  ERROR_EMPTY_PASSWORD,
} from "../errorsMessages/validationErrors.js";

const emailOptions = {
  isEmail: {
    errorMessage: ERROR_VALID_EMAIL,
  },
  isEmpty: {
    negated: true,
    errorMessage: ERROR_EMAIL,
  },
};

const passwordOptions = {
  isLength: {
    errorMessage: ERROR_PASSWORD,
    // Multiple options would be expressed as an array
    options: { max: 10 },
  },
  isEmpty: {
    negated: false,
    errorMessage: ERROR_EMPTY_PASSWORD,
  },
};

const nameOptions = {
  isEmpty: {
    negated: false,
    errorMessage: ERROR_NAME,
  },
};

export const authValidation = checkSchema({
  email: emailOptions,
  password: passwordOptions,
  name: nameOptions,
});
