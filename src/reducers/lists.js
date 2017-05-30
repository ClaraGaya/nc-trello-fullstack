import * as types from '../actions/types';

const initialState = {
  byId: {},
  loading: false,
  error: null
};

function normaliseData (data) {
    return data.reduce(function (acc, item) {
        acc[item.id] = item;
        return acc;
    }, {});
}

function getLists (prevState = initialState, action) {
  const newState = Object.assign({}, prevState);

  if (action.type === types.GET_LISTS_REQUEST) {
    newState.loading = true;
    newState.error = null;
  }

  if (action.type === types.GET_LISTS_SUCCESS) {
    newState.loading = true;
    newState.byId = normaliseData(action.payload); 
  }

  if (action.type === types.GET_LISTS_ERROR) {
    newState.error = action.payload;
    newState.loading = false;
  }
  
  return newState;
}

export default getLists;