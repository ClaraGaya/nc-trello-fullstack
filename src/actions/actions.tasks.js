import * as types from './types';
import axios from 'axios';

import {ROOT} from '../../config';


// Action creator for geting all the tasks
export function getTasks (){
    return function (dispatch) {
        dispatch(getTasksRequest());
        axios
            .get(`${ROOT}/tasks/`)
            .then(res => {
                dispatch(getTasksSuccess(res.data.tasks));
            })
            .catch(err => {
                dispatch(getTasksError(err));
            });
    };
}

export function getTasksRequest () {
    return {
        type: types.GET_TASKS_REQUEST
    };
}

export function getTasksSuccess (tasks) {
    return {
        type: types.GET_TASKS_SUCCESS,
        payload: tasks
    };
}

export function getTasksError (err) {
    return {
        type: types.GET_TASKS_ERROR,
        payload: err
    };
}

// Action creator for adding tasks

export function addTask (text, parentId) {
    return function (dispatch) {
        dispatch(addTaskRequest());
        axios.post(`${ROOT}/task`, {"body": text, "parentId": parentId})
        .then((res) => { dispatch(addTaskSuccess(res.data)) })
        .then((res) => { dispatch(getTasks()) })
        .catch((error) => {
            dispatch(addTaskError(error.message));
        });        
    };
}

export function addTaskRequest () {
    return {
        type: types.ADD_TASK_REQUEST
    };
}

export function addTaskSuccess (task) {
    return {
        type: types.ADD_TASK_SUCCESS,
        payload: task
    };
}

export function addTaskError (error) {
    return {
        type: types.ADD_TASK_ERROR,
        error
    };
}

// Action creator for updating tasks
export function updateTask (listName, id) {
    return function (dispatch) {
        dispatch(updateTaskRequest());
        axios.put(`${ROOT}/list/${id}`, {"body": body, "parentId": parentId })
        .then((res) => { dispatch(updateTaskSuccess(res.data)) })
        .then((res) => { dispatch(getLists()) })
        .catch((error) => {
            dispatch(updateTaskError(error.message));
        });        
    };
}

export function updateTaskRequest () {
    return {
        type: types.UPDATE_TASK_REQUEST
    };
}

export function updateTaskSuccess (list) {
    return {
        type: types.UPDATE_TASK_SUCCESS,
        payload: list
    };
}

export function updateTaskError (err) {
    return {
        type: types.UPDATE_TASK_ERROR,
        error: err
    };
}

// Action creator for removing lists
export function deleteTask (id) {
    return function (dispatch) {
        dispatch(deleteTaskRequest());
        axios.delete(`${ROOT}/tasks/${id}`)
        .then((res) => {
            dispatch(getTasks());
        })
        .catch((error) => {
            dispatch(deleteTaskError(error.message));
        });        
    };
}

export function deleteTaskRequest () {
    return {
        type: types.DELETE_TASK_REQUEST
    };
}

export function deleteTaskSuccess (task) {
    return {
        type: types.DELETE_TASK_SUCCESS,
        payload: task
    };
}

export function deleteTaskError (error) {
    return {
        type: types.DELETE_TASK_ERROR,
        error
    };
}
