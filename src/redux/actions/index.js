export const SAVED_EMAIL = 'SAVED_EMAIL';
export const API_SUCCESS = 'API_SUCCESS';
export const SAVE_EXPENSES = 'SAVE_EXPENSES';
export const REMOVE = 'REMOVE';
export const EDIT = 'EDIT';

const savedEmail = (email) => ({
  type: SAVED_EMAIL,
  payload: email,
});

const apiSuccess = (data) => ({
  type: 'API_SUCCESS',
  payload: data,
});

export const saveExpenses = (expense) => ({
  type: SAVE_EXPENSES,
  payload: expense,
});

export const remove = (id) => ({
  type: REMOVE,
  payload: {
    id,
  },
});

export const edit = (info) => ({
  type: EDIT,
  payload: info,
});

export const fetchApiCoins = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const result = await response.json();
  const arrayResult = Object.keys(result).filter((coin) => coin !== 'USDT');
  dispatch(apiSuccess(arrayResult));
};

export default savedEmail;
