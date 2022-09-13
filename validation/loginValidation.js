import { checkSchema } from "express-validator";

import {
  ERROR_NAME_VALID_LOGIN,
  ERROR_NAME_VALID_PASSWORD,
} from "../errorsMessages/validationErrors.js";

const nameOpation = {
  isEmpty: {
    negated: true,
    errorMessage: ERROR_NAME_VALID_LOGIN,
  },
};

const passwordOpation = {
  isEmpty: {
    negated: true,
    errorMessage: ERROR_NAME_VALID_PASSWORD,
  },
};

export const loginUserValidation = checkSchema({
  name: nameOpation,
  password: passwordOpation,
});
