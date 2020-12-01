const initialState = {
  otp_data_reducer: '',
  choose_gender_reducer: {
    id: '',
    name: '',
  },
  me_reducer: {
    id: '',
    user: '',
    secret_id: '',
    email: '',
    role: '',
    is_blast: '',
    full_name: '',
    username: '',
    gender: '',
    address: '',
    birthday: '',
    phone_number: '',
    notif_token: '',
    device: '',
  },
}

const auth_all_reducer = (state = initialState, action) => {
  console.log(action.type)
  console.log(action.payload)
  switch(action.type) {
    case 'SET_REGISTRATION_OTP_DATA':
    return {
      ...state,
      otp_data_reducer: action.payload,
    }
    case 'CHOOSE_GENDER':
    return {
      ...state,
      choose_gender_reducer: action.payload,
    }
    case 'ME_REDUCER':
    return {
      ...state,
      me_reducer: action.payload,
    }
    case 'LOG_OUT':
    return {
      ...state,
      me_reducer: {},
    }
    default:
      return state;
  }
}

export default auth_all_reducer
