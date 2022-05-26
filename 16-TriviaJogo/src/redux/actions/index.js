export const SAVE_TOKEN = 'SAVE_TOKEN';
export const SAVE_USER_INFO = 'SAVE_USER_INFO';
export const COUNTER = 'COUNTER';
export const ATT_SECONDS = 'ATT_SECONDS';
export const SAVE_PTS = 'SAVE_PTS';
export const RESET_PTS = 'RESET_PTS';

export const saveToken = (token) => ({
  type: SAVE_TOKEN,
  payload: token,
});

export const savePts = (pts) => ({
  type: SAVE_PTS,
  payload: pts,
});

export const resetPts = (pts) => ({
  type: RESET_PTS,
  payload: pts,
});

export const attSecs = () => ({
  type: ATT_SECONDS,
});

export const counter = () => ({
  type: COUNTER,
});

export const saveUserInfo = (state) => ({
  type: SAVE_USER_INFO,
  payload: state,
});
