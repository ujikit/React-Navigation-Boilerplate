import { combineReducers } from 'redux'

import auth_all_reducer from './auth_all_reducer'

const appReducer = combineReducers({
  auth_all_reducer: auth_all_reducer,
})

export default appReducer
