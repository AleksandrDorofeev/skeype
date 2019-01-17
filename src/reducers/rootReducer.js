import userReducer from './userReducer';
import contactsReducer from './contactsReducer';
import activeUserIdReducer from './activeUserIdReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  user: userReducer,
  contacts: contactsReducer,
  activeUserId: activeUserIdReducer
})