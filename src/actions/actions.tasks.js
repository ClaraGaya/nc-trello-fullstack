import * as types from './types';
import axios from 'axios';

import {ROOT} from '../../config';


// Action creator for geting all the tasks
export function getTasks (id){
    return function (dispatch) {
        dispatch(getTasksRequest(id));
        axios
            .get(`${ROOT}/tasks`)
            .then(res => {
                dispatch(getTasksSuccess(res.data.tasks));
                dispatch(getTasksSuccess(res.data.tasks.filter(
                    (task) => {
                        return task.parentTaskID === id;
                    }
                )))
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
        axios.post(`${ROOT}/task`, {"body": text, "parentListID": parentId})
        .then((res) => {
            dispatch(getTasks());
        })
        .catch((error) => {
            dispatch(addTaskError(error.message));
        });        
    };
}

function addTaskRequest () {
    return {
        type: types.ADD_TASK_REQUEST
    };
}

function addTaskSuccess (task) {
    return {
        type: types.ADD_TASK_SUCCESS,
        payload: task
    };
}

function addTaskError (error) {
    return {
        type: types.ADD_TASK_ERROR,
        error
    };
}

// Action creator for removing lists
export function removeTask (id) {
    return function (dispatch) {
        dispatch(removeTaskRequest());
        axios.delete(`${ROOT}/tasks/${id}`)
        .then((res) => {
            dispatch(getTasks());
        })
        .catch((error) => {
            dispatch(removeTaskError(error.message));
        });        
    };
}

function removeTaskRequest () {
    return {
        type: types.REMOVE_TASK_REQUEST
    };
}

function removeTaskSuccess (task) {
    return {
        type: types.REMOVE_TASK_SUCCESS,
        payload: task
    };
}

function removeTaskError (error) {
    return {
        type: types.REMOVE_TASK_ERROR,
        error
    };
}
