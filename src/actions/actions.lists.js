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
