const setOTPData = (body) => {
  return function(dispatch) {
    return dispatch({type: 'SET_REGISTRATION_OTP_DATA', payload: body});
  };
};

const chooseGenderDispatch = (data) => {
  return function(dispatch) {
    return dispatch({type: 'CHOOSE_GENDER', payload: data});
  };
};

const meDispatch = (data) => {
  return function(dispatch) {
    return dispatch({type: 'ME_REDUCER', payload: data});
  };
};

const logoutDispatch = (data) => {
  return function(dispatch) {
    return dispatch({type: 'LOG_OUT'});
  };
};

export {
  setOTPData,
  chooseGenderDispatch,
  meDispatch,
  logoutDispatch,
};
