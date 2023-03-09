export const SAVED_EMAIL = 'SAVED_EMAIL';
export const WAITING_API = 'WAITING_API';
export const API_SUCCESS = 'API_SUCCESS';

const savedEmail = (email) => ({
  type: SAVED_EMAIL,
  payload: email,
});

const waitingApi = () => ({
  type: 'WAITING_API',
});

const apiSuccess = (data) => ({
  type: 'API_SUCCESS',
  payload: data,
});

export const fetchApiCoins = () => async (dispatch) => {
  dispatch(waitingApi());
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const result = await response.json();
  dispatch(apiSuccess(result));
  console.log(result);
};

export default savedEmail;
