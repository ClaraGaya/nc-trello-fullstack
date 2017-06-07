import * as types from './types';
import axios from 'axios';

import {ROOT} from '../config';


// Action creator for geting all the lists
export function getLists (){
    return function (dispatch) {
        dispatch(getListsRequest());
        axios
            .get(`${ROOT}/lists`)
            .then(res => {
                dispatch(getListsSuccess(res.data.lists));
            })
            .catch(err => {
                dispatch(getListsError(err));
            });
    };
}

export function getListsRequest () {
    return {
        type: types.GET_LISTS_REQUEST
    };
}

export function getListsSuccess (lists) {
    return {
        type: types.GET_LISTS_SUCCESS,
        payload: lists
    };
}

export function getListsError (err) {
    return {
        type: types.GET_LISTS_ERROR,
        payload: err
    };
}


// Action creator for adding lists
export function addList (listName) {
    return function (dispatch) {
        dispatch(addListRequest());
        axios.post(`${ROOT}/list`, {"listName": listName})
        .then((res) => { dispatch(addListSuccess(res.data)) })
        .then((res) => { dispatch(getLists()) })
        .catch((error) => {
            dispatch(addListError(error.message));
        });        
    };
}

export function addListRequest () {
    return {
        type: types.ADD_LIST_REQUEST
    };
}

export function addListSuccess (list) {
    return {
        type: types.ADD_LIST_SUCCESS,
        payload: list
    };
}

export function addListError (err) {
    return {
        type: types.ADD_LIST_ERROR,
        error: err
    };
}


// Action creator for adding lists
export function updateList (listName, id) {
    return function (dispatch) {
        dispatch(updateListRequest());
        axios.put(`${ROOT}/list/${id}`, {"listName": listName })
        .then((res) => { dispatch(updateListSuccess(res.data)) })
        .then((res) => { dispatch(getLists()) })
        .catch((error) => {
            dispatch(updateListError(error.message));
        });        
    };
}

export function updateListRequest () {
    return {
        type: types.UPDATE_LIST_REQUEST
    };
}

export function updateListSuccess (list) {
    return {
        type: types.UPDATE_LIST_SUCCESS,
        payload: list
    };
}

export function updateListError (err) {
    return {
        type: types.UPDATE_LIST_ERROR,
        error: err
    };
}

// Action creator for removing lists
export function deleteList (id) {
    return function (dispatch) {
        dispatch(deleteListRequest(id));
        axios.delete(`${ROOT}/list/${id}`)
        .then((res) => {dispatch(deleteListSuccess(id))})
        .catch((error) => {
            dispatch(deleteListError(error.message));
        });        
    };
}

export function deleteListRequest () {
    return {
        type: types.DELETE_LIST_REQUEST
    };
}

export function deleteListSuccess (id) {
    return {
        type: types.DELETE_LIST_SUCCESS,
        payload: id
    };
}

export function deleteListError (error) {
    return {
        type: types.DELETE_LIST_ERROR,
        error
    };
}
