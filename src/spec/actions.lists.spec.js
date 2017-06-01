import * as actions from '../actions/actions.lists';
import * as types from '../actions/types';
import {expect} from 'chai';

describe('actions.getLists', function () {
    it('getListsRequest: returns the expected action', function () {
        const action = actions.getListsRequest();
        expect(action).to.eql({
            type: types.GET_LISTS_REQUEST,
        });
    });
    it('getListsSuccess: returns the expected action', function () {
        const action = actions.getListsSuccess({});
        expect(action).to.eql({
            type: types.GET_LISTS_SUCCESS,
            payload: {}
        });
    });
    it('getListsError: returns the expected action', function () {
        const action = actions.getListsError({});
        expect(action).to.eql({
            type: types.GET_LISTS_ERROR,
            payload: {}
        });
    });
});

describe('actions.addList', function () {
    it('addListRequest: returns the expected action', function () {
        const action = actions.addListRequest();
        expect(action).to.eql({
            type: types.ADD_LIST_REQUEST,
        });
    });
    it('addListSuccess: returns the expected action', function () {
        const action = actions.addListSuccess({});
        expect(action).to.eql({
            type: types.ADD_LIST_SUCCESS,
            payload: {}
        });
    });
    it('addListError: returns the expected action', function () {
        const action = actions.addListError({});
        expect(action).to.eql({
            type: types.ADD_LIST_ERROR,
            error: {}
        });
    });
});

describe('actions.updateList', function () {
    it('updateListRequest: returns the expected action', function () {
        const action = actions.updateListRequest();
        expect(action).to.eql({
            type: types.UPDATE_LIST_REQUEST,
        });
    });
    it('updateListSuccess: returns the expected action', function () {
        const action = actions.updateListSuccess({});
        expect(action).to.eql({
            type: types.UPDATE_LIST_SUCCESS,
            payload: {}
        });
    });
    it('updateListError: returns the expected action', function () {
        const action = actions.updateListError({});
        expect(action).to.eql({
            type: types.UPDATE_LIST_ERROR,
            error: {}
        });
    });
});

describe('actions.deleteList', function () {
    it('deleteListRequest: returns the expected action', function () {
        const action = actions.deleteListRequest();
        expect(action).to.eql({
            type: types.DELETE_LIST_REQUEST,
        });
    });
    it('deleteListSuccess: returns the expected action', function () {
        const action = actions.deleteListSuccess({});
        expect(action).to.eql({
            type: types.DELETE_LIST_SUCCESS,
            payload: {}
        });
    });
    it('deleteListError: returns the expected action', function () {
        const action = actions.deleteListError({});
        expect(action).to.eql({
            type: types.DELETE_LIST_ERROR,
            error: {}
        });
    });
});