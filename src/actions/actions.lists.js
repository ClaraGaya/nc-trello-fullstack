import * as types from './types';
import axios from 'axios';

import {ROOT} from '../../config';


// Action creator for geting all the articles
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
        axios.post(`${ROOT}/list`, {"list": listName})
        .then((res) => {
            dispatch(addListSuccess(res.data.list));
        })
        .catch((error) => {
            dispatch(addListError(error.message));
        });        
    };
}

function addListRequest () {
    return {
        type: types.ADD_LIST_REQUEST
    };
}

function addListSuccess (comment) {
    return {
        type: types.ADD_LIST_SUCCESS,
        payload: list
    };
}

function addListError (error) {
    return {
        type: types.ADD_LIST_ERROR,
        error
    };
}

// Action creator for removing lists
export function removeList (id) {
    return function (dispatch) {
        dispatch(removeListRequest());
        axios.delete(`${ROOT}/lists/${id}`)
        .then((res) => {
            dispatch(getLists());
        })
        .catch((error) => {
            dispatch(removeListError(error.message));
        });        
    };
}

function removeListRequest () {
    return {
        type: types.REMOVE_LIST_REQUEST
    };
}

function removeListSuccess (comment) {
    return {
        type: types.REMOVE_LIST_SUCCESS,
        payload: list
    };
}

function removeListError (error) {
    return {
        type: types.REMOVE_LIST_ERROR,
        error
    };
}