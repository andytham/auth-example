import { combineReducers } from 'redux';
import { authentication, registration, users,	alert } from './reducers';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert
});

export default rootReducer;