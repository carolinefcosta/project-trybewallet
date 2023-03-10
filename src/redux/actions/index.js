export const SAVED_EMAIL = 'SAVED_EMAIL';
export const API_SUCCESS = 'API_SUCCESS';

const savedEmail = (email) => ({
  type: SAVED_EMAIL,
  payload: email,
});

const apiSuccess = (data) => ({
  type: 'API_SUCCESS',
  payload: data,
});

export const fetchApiCoins = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const result = await response.json();
  const arrayResult = Object.keys(result).filter((coin) => coin !== 'USDT');
  console.log(result);
  dispatch(apiSuccess(arrayResult));
};

export default savedEmail;
