// Coloque aqui suas actions
export const SAVE_USER_EMAIL = 'SAVE_USER';
export const WALLET_USER = 'WALLET_USER';

export const saveUserAction = (payload) => ({
  type: SAVE_USER_EMAIL,
  payload,
});

export const walletUser = (payload) => ({
  type: WALLET_USER,
  payload,
});
//
