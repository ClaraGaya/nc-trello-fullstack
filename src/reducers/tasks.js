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

function getTasks (prevState = initialState, action) {
  const newState = Object.assign({}, prevState);

  if (action.type === types.GET_TASKS_REQUEST) {
    newState.loading = true;
    newState.error = null;
  }

  if (action.type === types.GET_TASKS_SUCCESS) {
    newState.loading = true;
    newState.byId = normaliseData(action.payload); 
  }

  if (action.type === types.GET_TASKS_ERROR) {
    newState.error = action.payload;
    newState.loading = false;
  }
  
  return newState;
}

function addTasks (prevState = initialState, action) {
  const newState = Object.assign({}, prevState);

  if (action.type === types.ADD_TASK_REQUEST) {
    newState.loading = true;
    newState.error = null;
  }

  if (action.type === types.ADD_TASK_SUCCESS) {
    const id = action.payload.id;
    newState.byId[id] = Object.assign({}, newState.byId[id], action.payload);
  }

  if (action.type === types.ADD_TASK_ERROR) {
    newState.error = action.payload;
    newState.loading = false;
  }

  if (action.type === types.REMOVE_TASK_ERROR) {
    newState.error = action.payload;
    newState.loading = false;
  }
  
  return newState;
}

export default getTasks;
