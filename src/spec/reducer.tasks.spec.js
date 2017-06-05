import { expect } from 'chai';
import * as types from '../actions/types';
import * as actions from '../actions/actions.tasks';
import { reducerTasks } from '../reducers/tasks';

describe('Tests reducerTasks',  () => {
    const initialState = {
        byId: {
            1: {
                id: 1,
                body:"Test React reducers",
                parentid: 2
            },
            2: {
                "body": "Test actions",
                "id": 2,
                "parentid": 1
            }
        },
        loading: false,
        error: null
    };
    describe('should handle GET_TASKS', () => {
        it('getTasksRequest: does not mutate the initial state', function () {
            const action = actions.getTasksRequest();
            const newState = reducerTasks(initialState, action);
            expect(newState.loading).to.be.true;
            expect(newState.error).to.be.null;
        });
        it('getTasksSuccess: does not mutate the initial state', function () {
            const action = actions.getTasksSuccess([]);
            const newState = reducerTasks(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.byId).to.not.equal(initialState.byId);
            expect(newState.loading).to.be.false;
            expect(newState.error).to.be.null;
        });
        it('getTasksError: does not mutate the initial state', function () {
            const action = actions.getTasksError();
            const newState = reducerTasks(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.loading).to.be.false;
        });
    });
    describe('should handle ADD_TASK', () => {
        it('addTaskRequest: does not mutate the initial state', function () {
            const action = actions.addTaskRequest();
            const newState = reducerTasks(initialState, action);
            expect(newState.loading).to.be.true;
        });
        it('addTaskSuccess: does not mutate the initial state', function () {
            const action = actions.addTaskSuccess('Test', 2);
            const newState = reducerTasks(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.byId).to.not.equal(initialState.byId);
            expect(newState.loading).to.be.false;
        });
        it('addTaskError: does not mutate the initial state', function () {
            const action = actions.addTaskError();
            const newState = reducerTasks(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.loading).to.be.false;
        });
        it('addTask: adds a new task', function () {
            const newState = reducerTasks(initialState, actions.addTaskSuccess({"body":"Test","parentid": 1, "id":3}));
            expect(newState.byId).to.eql({
                "1": {
                    "body": "Test React reducers",
                    "id": 1,
                    "parentid": 2
                },
                "2": {
                    "body": "Test actions",
                    "id": 2,
                    "parentid": 1
                },
                "3": {
                    "body": "Test",
                    "id": 3,
                    "parentid": 1
                }
            });
        });
    });
    describe('should handle UPDATE_TASK', () => {
        it('updateTaskRequest: does not mutate the initial state', function () {
            const action = actions.updateTaskRequest();
            const newState = reducerTasks(initialState, action);
            expect(newState.loading).to.be.true;
        });
        it('updateTaskSuccess: does not mutate the initial state', function () {
            const action = actions.updateTaskSuccess('Test', 2);
            const newState = reducerTasks(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.byId).to.not.equal(initialState.byId);
            expect(newState.loading).to.be.false;
        });
        it('updateTaskError: does not mutate the initial state', function () {
            const action = actions.updateTaskError();
            const newState = reducerTasks(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.loading).to.be.false;
        });
        it('updateTask: updates a task', function () {
            const newState = reducerTasks(initialState, actions.updateTaskSuccess({"body":"Test update","parentid": 1, "id":3}));
            expect(newState.byId).to.eql({
                "1": {
                    "body": "Test React reducers",
                    "id": 1,
                    "parentid": 2
                },
                "2": {
                    "body": "Test actions",
                    "id": 2,
                    "parentid": 1
                },
                "3": {
                    "body": "Test update",
                    "id": 3,
                    "parentid": 1
                }
            });
        });
    });
    describe('should handle DELETE_TASK', () => {
        it('deleteTaskRequest: does not mutate the initial state', function () {
            const action = actions.deleteTaskRequest();
            const newState = reducerTasks(initialState, action);
            expect(newState.loading).to.be.true;
        });
        it('deleteTaskSuccess: does not mutate the initial state', function () {
            const action = actions.deleteTaskSuccess(2);
            const newState = reducerTasks(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.byId).to.not.equal(initialState.byId);
            expect(newState.loading).to.be.false;
        });
        it('deleteTaskError: does not mutate the initial state', function () {
            const action = actions.deleteTaskError();
            const newState = reducerTasks(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.loading).to.be.false;
        });
        it('deleteTask: deletes a task', function () {
            const action = actions.deleteTaskSuccess(1);
            const newState = reducerTasks(initialState, action);
            expect(newState.byId).to.eql({
                2: {
                    body: "Test actions",
                    id: 2,
                    parentid: 1
                }
            });
        });
    });
});
