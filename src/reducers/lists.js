import * as types from '../actions/types';
import _ from 'underscore';

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

export function reducerLists (prevState = initialState, action) {
  const newState = Object.assign({}, prevState);
  
  switch (action.type) {
    case types.GET_LISTS_REQUEST: {
      newState.loading = true;
      newState.error = null;
      return newState;
    }
    case types.GET_LISTS_SUCCESS: {
      newState.loading = false;
      newState.byId = normaliseData(action.payload); 
      return newState;
    }
    case types.GET_LISTS_ERROR: {
      newState.loading = false;
      newState.error = action.payload;
      return newState;
    }
    case types.ADD_LIST_REQUEST: {
      newState.loading = true;
      newState.error = null;
      return newState;
    }
    case types.ADD_LIST_SUCCESS: {
      newState.loading = false;
      const id = action.payload.id;
      newState.byId = Object.assign({}, prevState.byId);
      newState.byId[id] = Object.assign({}, newState.byId[id], action.payload);
      return newState;
    }
    case types.ADD_LIST_ERROR: {
      newState.error = action.payload;
      newState.loading = false;
      return newState;
    }
    case types.UPDATE_LIST_REQUEST: {
      newState.loading = true;
      newState.error = null;
      return newState;
    }
    case types.UPDATE_LIST_SUCCESS: {
      newState.loading = false;
      const id = action.payload.id;
      newState.byId = Object.assign({}, prevState.byId);
      newState.byId[id] = Object.assign({}, newState.byId[id], action.payload);
      return newState;
    }
    case types.UPDATE_LIST_ERROR: {
      newState.error = action.payload;
      newState.loading = false;
      return newState;
    }
    case types.DELETE_LIST_REQUEST: {
      newState.loading = true;
      newState.error = null;
      return newState;
    }
    case types.DELETE_LIST_SUCCESS: {
      newState.loading = false;
      newState.byId = normaliseData(_.filter(prevState.byId, (item, i) => {
        return item.id !== action.payload;
      }))
      return newState;
    }
    case types.DELETE_LIST_ERROR: {
      newState.error = action.payload;
      newState.loading = false;
      return newState;
    }
    default: {
      return prevState
    };   
  }
}