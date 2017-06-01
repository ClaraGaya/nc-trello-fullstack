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

function reducerLists (prevState = initialState, action) {
  const newState = Object.assign({}, prevState);
  
  switch (action.type) {
    case types.GET_LISTS_REQUEST: {
      newState.loading = true;
      newState.error = null;
      return newState;
    }
    case types.GET_LISTS_SUCCESS: {
      newState.loading = true;
      newState.byId = normaliseData(action.payload); 
      return newState;
    }
    case types.GET_LISTS_ERROR: {
      newState.loading = false;
      newState.error = action.payload;
      return newState;
    }
    default: return prevState;
    
  }
}

export default reducerLists;