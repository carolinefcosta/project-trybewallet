export const SAVED_EMAIL = 'SAVED_EMAIL';

const savedEmail = (email) => ({
  type: SAVED_EMAIL,
  payload: email,
});

export default savedEmail;
