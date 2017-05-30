import * as types from './types';
import axios from 'axios';

import {ROOT} from '../../config';


// Action creator for geting all the articles
export function getTasks (){
    return function (dispatch) {
        dispatch(getTasksRequest());
        axios
            .get(`${ROOT}/tasks`)
            .then(res => {
                dispatch(getTasksSuccess(res.data.articles));
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
