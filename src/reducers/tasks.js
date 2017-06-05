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

export function reducerTasks (prevState = initialState, action) {
  const newState = Object.assign({}, prevState);
  
  switch (action.type) {
    case types.GET_TASKS_REQUEST: {
      newState.loading = true;
      newState.error = null;
      return newState;
    }
    case types.GET_TASKS_SUCCESS: {
      newState.byId = action.payload;
      newState.loading = false;
      newState.byId = normaliseData(action.payload); 
      return newState;
    }
    case types.GET_TASKS_ERROR: {
      newState.error = action.payload;
      newState.loading = false;
      return newState;
    }    
    case types.ADD_TASK_REQUEST: {
      newState.loading = true;
      newState.error = null;
      return newState;
    }
    case types.ADD_TASK_SUCCESS: {
      newState.loading = false;
      const id = action.payload.id;
      newState.byId = Object.assign({}, prevState.byId);
      newState.byId[id] = Object.assign({}, newState.byId[id], action.payload);
      return newState;
    }
    case types.ADD_TASK_ERROR: {
      newState.error = action.payload;
      newState.loading = false;
      return newState;
    }
    case types.UPDATE_TASK_REQUEST: {
      newState.loading = true;
      newState.error = null;
      return newState;
    }
    case types.UPDATE_TASK_SUCCESS: {
      newState.loading = false;
      const id = action.payload.id;
      newState.byId = Object.assign({}, prevState.byId);
      newState.byId[id] = Object.assign({}, newState.byId[id], action.payload);
      return newState;
    }
    case types.UPDATE_TASK_ERROR: {
      newState.error = action.payload;
      newState.loading = false;
      return newState;
    }
    case types.DELETE_TASK_REQUEST: {
      newState.loading = true;
      newState.error = null;
      return newState;
    }
    case types.DELETE_TASK_SUCCESS: {
      newState.loading = false;
      newState.byId = normaliseData(_.filter(prevState.byId, (item, i) => {
        return item.id !== action.payload;
      }))
      return newState;
    }
    case types.DELETE_TASK_ERROR: {
      newState.error = action.payload;
      newState.loading = false;
      return newState;
    }
    default: return prevState;
  }
}