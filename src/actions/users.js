import axios from 'axios';
import { createAction } from 'redux-actions';

export const fetchDataRequest = createAction('DATA_FETCH_REQUEST');
export const fetchDataSuccess = createAction('DATA_FETCH_SUCCESS');
export const fetchDataFailure = createAction('DATA_FETCH_FAILURE');

export const getDataList = (params) => async (dispatch) => {
  dispatch(fetchDataRequest());
  try {
<<<<<<< HEAD
    const res = await axios.get('./users.json', params);
=======
    const res = await axios.get('./users.json');
>>>>>>> master
    dispatch(fetchDataSuccess(res.data));
  } catch (e) {
	  dispatch(fetchDataFailure());
  }
};
