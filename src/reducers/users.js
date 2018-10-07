import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import * as actions from '../actions/users';

const initialState = {
  usersList: {},
  usersLastPage: '',
};

const usersListFetchingState = handleActions({
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
  [actions.fetchDataSuccess](state, { payload }) {
    return {
      ...state,
      usersLastPage: payload.users.length,
      usersList: { ...payload.users }
    };
  }
}, initialState);

export default combineReducers({
  usersListFetchingState,
  users,
});
