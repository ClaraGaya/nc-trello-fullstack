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

function reducerTasks (prevState = initialState, action) {
  const newState = Object.assign({}, prevState);
  
  switch (action.type) {
    case types.GET_TASKS_REQUEST: {
      newState.loading = true;
      newState.error = null;
      return newState;
    }
    case types.GET_TASKS_SUCCESS: {
      newState.loading = true;
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
      const id = action.payload.id;
      newState.byId[id] = Object.assign({}, newState.byId[id], action.payload);
      return newState;
    }
    case types.ADD_TASK_ERROR: {
      newState.error = action.payload;
      newState.loading = false;
      return newState;
    }
    case types.REMOVE_TASK_ERROR: {
      newState.error = action.payload;
      newState.loading = false;
      return newState;
    }
    default: return prevState;
  }
}

export default reducerTasks;
