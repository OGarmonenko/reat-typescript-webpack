import CONSTANTS from '@constants';

const validationMap: { [key: string]: (value: string) => string } = {
  email: (value: string): string => {
    if (value) {
      return !CONSTANTS.RegExp.EMAIL.test(value) ? CONSTANTS.VALIDATION_ERROR.INCORRECT_VALUE : undefined;
    }
    return CONSTANTS.VALIDATION_ERROR.EMPTY_VALUE;
  },
  password: (value: string): string => {
    if (value.length) {
      return CONSTANTS.MASKS.MIN_PASSWORD_LENGTH > value.length || CONSTANTS.MASKS.MAX_PASSWORD_LENGTH < value.length
        ? CONSTANTS.VALIDATION_ERROR.PASSWORD_LENGTH
        : undefined;
    }
    return CONSTANTS.VALIDATION_ERROR.EMPTY_VALUE;
  },
  login: (value: string): string => {
    return !value ? CONSTANTS.VALIDATION_ERROR.EMPTY_VALUE : undefined;
  },
};
export default validationMap;
