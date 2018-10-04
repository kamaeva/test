

import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import * as actions from '../actions/users';

const initialState = {
  usersList: {},
  // usersCurrentPage: '',
  // usersLastPage: '',
};

const dataFetchingState = handleActions({
  [actions.fetchDataRequest]() {
    return 'request';
  },
  [actions.fetchDataSuccess]() {
    return 'success';
  },
  [actions.fetchDataFailure]() {
    return 'failed';
  },
}, 'none');

const users = handleActions({
  [actions.fetchDataSuccess](state, { payload: { users } } {
    return {
      ...state,
      // usersCurrentPage: payload.current_page,
      // usersLastPage: payload.last_page,
      usersList: { ...users }
  }, initialState);

export default combineReducers({
  dataFetchingState,
  users,
});