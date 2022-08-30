const CONSTANTS = {
  ROUTES: {
    MAIN_PATH: '/',
    AUTH_PATH: '/auth',
    CARD_PATH: 'card/',
  },
  API: {
    BASE_URL: 'http://localhost:3000/api/',
    RECORD_URL: 'record/',
    AUTH_URL: 'auth/login',
    REGISTRATION_URL: 'auth/registration',
  },
  USER_ITEM_ARRAY: ['surname', 'name', 'lastname', 'birthday', 'locality', 'address', 'phone', 'email'],
  MASKS: {
    PHONE: '+375 (00) 000-00-00',
    EMAIL: /^\S*@?\S*$/,
    MIN_PASSWORD_LENGTH: 6,
    MAX_PASSWORD_LENGTH: 10,
  },
  RegExp: {
    EMAIL: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  },
  VALIDATION_ERROR: {
    PASSWORD_LENGTH: `Password must be between 6 and 10 characters`,
    INCORRECT_VALUE: 'Incorrect value',
    EMPTY_VALUE: 'Field is required',
  },
};

export default CONSTANTS;

export const LABEL_USER: { [key: string]: string } = {
  surname: 'Surname',
  name: 'Name',
  lastname: 'LastName',
  birthday: 'Birthday',
  locality: 'Locality',
  address: 'Address',
  phone: 'Phone',
  email: 'Email',
};

export const USER_AUTH: { [key: string]: string } = {
  email: 'Email',
  password: 'Password',
};

export const USER_REGISTRATION: { [key: string]: string } = {
  login: 'Login',
  email: 'Email',
  password: 'Password',
};
