const CONSTANTS = {
  ROUTES: {
    MAIN_PATH: '/',
    CARD_PATH: 'card/',
    ERROR_PATH: '/*',
  },
  API: {
    BASE_URL: 'http://localhost:3000/api/',
    RECORD_URL: 'record/',
  },
  USER_ITEM_ARRAY: ['surname', 'name', 'lastname', 'birthday', 'locality', 'address', 'phone', 'email'],
  MASKS: {
    PHONE: '+375 (00) 000-00-00',
    EMAIL: /^\S*@?\S*$/,
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
