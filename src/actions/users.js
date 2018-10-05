
import axios from 'axios';
import { createAction } from 'redux-actions';

export const fetchDataRequest = createAction('DATA_FETCH_REQUEST');
export const fetchDataSuccess = createAction('DATA_FETCH_SUCCESS');
export const fetchDataFailure = createAction('DATA_FETCH_FAILURE');

export const getDataList = () => async (dispatch) => {
  dispatch(fetchDataRequest());
  try {
    const res = await axios.get('./users.json');
    dispatch(fetchDataSuccess(res.data));
  } catch (e) {
	  dispatch(fetchDataFailure());
  }
};


