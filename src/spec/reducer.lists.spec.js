import { expect } from 'chai';
import * as types from '../actions/types';
import * as actions from '../actions/actions.lists';
import { reducerLists } from '../reducers/lists';

describe('Tests reducerLists',  () => {
    const initialState = {
        byId: {
            1: {
                id: 1,
                listname:"To Do"
            },
            2: {
                id: 2,
                listname:"In Progress"
            }
        },
        loading: false,
        error: null
    };
    describe('should handle GET_LISTS', () => {
        it('getListsRequest: does not mutate the initial state', function () {
            const action = actions.getListsRequest();
            const newState = reducerLists(initialState, action);
            expect(newState.loading).to.be.true;
            expect(newState.error).to.be.null;
        });
        it('getListsSuccess: does not mutate the initial state', function () {
            const action = actions.getListsSuccess([]);
            const newState = reducerLists(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.byId).to.not.equal(initialState.byId);
            expect(newState.loading).to.be.false;
            expect(newState.error).to.be.null;
        });
        it('getListsError: does not mutate the initial state', function () {
            const action = actions.getListsError();
            const newState = reducerLists(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.loading).to.be.false;
        });
    });
    describe('should handle ADD_LIST', () => {
        it('addListRequest: does not mutate the initial state', function () {
            const action = actions.addListRequest();
            const newState = reducerLists(initialState, action);
            expect(newState.loading).to.be.true;
        });
        it('addListSuccess: does not mutate the initial state', function () {
            const action = actions.addListSuccess('Test', 2);
            const newState = reducerLists(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.byId).to.not.equal(initialState.byId);
            expect(newState.loading).to.be.false;
        });
        it('addListError: does not mutate the initial state', function () {
            const action = actions.addListError();
            const newState = reducerLists(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.loading).to.be.false;
        });
        it('addList: adds a new list', function () {
            const action = actions.addListSuccess({"listname":"Done","id":3});
            const newState = reducerLists(initialState, action);
            expect(newState.byId).to.eql({
                1: {
                    id: 1,
                    listname:"To Do"
                },
                2: {
                    id: 2,
                    listname:"In Progress"
                },
                3: {
                    id: 3,
                    listname:"Done"
                }
            });
        });
    });
    describe('should handle UPDATE_LIST', () => {
        it('updateListRequest: does not mutate the initial state', function () {
            const action = actions.updateListRequest();
            const newState = reducerLists(initialState, action);
            expect(newState.loading).to.be.true;
        });
        it('updateListSuccess: does not mutate the initial state', function () {
            const action = actions.updateListSuccess('Test', 2);
            const newState = reducerLists(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.byId).to.not.equal(initialState.byId);
            expect(newState.loading).to.be.false;
        });
        it('updateListError: does not mutate the initial state', function () {
            const action = actions.updateListError();
            const newState = reducerLists(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.loading).to.be.false;
        });
        it('updateListSuccess: updates a list', function () {
            const action = actions.updateListSuccess({"listname":"Review","id":3});
            const newState = reducerLists(initialState, action);
            expect(newState.byId).to.eql({
                1: {
                    id: 1,
                    listname:"To Do"
                },
                2: {
                    id: 2,
                    listname:"In Progress"
                },
                3: {
                    id: 3,
                    listname:"Review"
                }
            });
        });
    });
    describe('should handle DELETE_LIST', () => {
        it('deleteListRequest: does not mutate the initial state', function () {
            const action = actions.deleteListRequest();
            const newState = reducerLists(initialState, action);
            expect(newState.loading).to.be.true;
        });
        it('deleteListSuccess: does not mutate the initial state', function () {
            const action = actions.deleteListSuccess(2);
            const newState = reducerLists(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.byId).to.not.equal(initialState.byId);
            expect(newState.loading).to.be.false;
        });
        it('deleteListError: does not mutate the initial state', function () {
            const action = actions.deleteListError();
            const newState = reducerLists(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.loading).to.be.false;
        });
        it('deleteList: deletes a list', function () {
            const action = actions.deleteListSuccess(1);
            const newState = reducerLists(initialState, action);
            expect(newState.byId).to.eql({
                2: {
                    id: 2,
                    listname:"In Progress"
                }
            });
        });
    });
});
 