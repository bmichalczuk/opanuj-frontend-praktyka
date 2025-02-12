import { type ValidationStrategy, isInteger } from './strategies';

import { message } from './messages';

export const validateNumber = (
  value: number,
  ...validateStategies: ValidationStrategy[]
): message => {
  if (!value || !isInteger(value)) {
    return message.NOTINTEGER;
  }

  if (!validateStategies.every((strategy) => strategy(value))) {
    return message.INVALID;
  }

  return message.VALID;
};
