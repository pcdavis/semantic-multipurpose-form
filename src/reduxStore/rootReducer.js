import { combineReducers } from 'redux';
import { reducer as ReduxReducer } from 'redux-form';
import testReducer from '../components/testArea/testReducer';
import formsReducer from '../components/forms/formsReducer';
// import eventReducer from '../../features/event/eventReducer';
// import modalsReducer from '../../features/modals/modalReducer';
// import authReducer from '../../features/auth/authReducer';

const rootReducer = combineReducers({
  test: testReducer,
  reduxForms    : ReduxReducer,
  myForms: formsReducer
})


export default rootReducer