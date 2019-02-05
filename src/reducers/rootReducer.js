import userReducer from './userReducer';
import contactsReducer from './contactsReducer';
import activeUserIdReducer from './activeUserIdReducer';
import messagesReducer from './messagesReducer';
import typingReducer from './typingReducer'
import { combineReducers } from 'redux';

export default combineReducers({
  user: userReducer,
  contacts: contactsReducer,
  activeUserId: activeUserIdReducer,
  messages: messagesReducer,
  typing: typingReducer
})