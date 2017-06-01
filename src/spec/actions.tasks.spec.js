import * as actions from '../actions/actions.tasks';
import * as types from '../actions/types';
import {expect} from 'chai';

describe('actions.getTasks', function () {
    it('getTasksRequest: returns the expected action', function () {
        const action = actions.getTasksRequest();
        expect(action).to.eql({
            type: types.GET_TASKS_REQUEST,
        });
    });
    it('getTasksSuccess: returns the expected action', function () {
        const action = actions.getTasksSuccess({});
        expect(action).to.eql({
            type: types.GET_TASKS_SUCCESS,
            payload: {}
        });
    });
    it('getTasksError: returns the expected action', function () {
        const action = actions.getTasksError({});
        expect(action).to.eql({
            type: types.GET_TASKS_ERROR,
            payload: {}
        });
    });
});

describe('actions.addTask', function () {
    it('addTaskRequest: returns the expected action', function () {
        const action = actions.addTaskRequest();
        expect(action).to.eql({
            type: types.ADD_TASK_REQUEST,
        });
    });
    it('addTaskSuccess: returns the expected action', function () {
        const action = actions.addTaskSuccess({});
        expect(action).to.eql({
            type: types.ADD_TASK_SUCCESS,
            payload: {}
        });
    });
    it('addTaskError: returns the expected action', function () {
        const action = actions.addTaskError({});
        expect(action).to.eql({
            type: types.ADD_TASK_ERROR,
            error: {}
        });
    });
});

describe('actions.updateTask', function () {
    it('updateTaskRequest: returns the expected action', function () {
        const action = actions.updateTaskRequest();
        expect(action).to.eql({
            type: types.UPDATE_TASK_REQUEST,
        });
    });
    it('updateTaskSuccess: returns the expected action', function () {
        const action = actions.updateTaskSuccess({});
        expect(action).to.eql({
            type: types.UPDATE_TASK_SUCCESS,
            payload: {}
        });
    });
    it('updateTaskError: returns the expected action', function () {
        const action = actions.updateTaskError({});
        expect(action).to.eql({
            type: types.UPDATE_TASK_ERROR,
            error: {}
        });
    });
});

describe('actions.deleteTask', function () {
    it('deleteTaskRequest: returns the expected action', function () {
        const action = actions.deleteTaskRequest();
        expect(action).to.eql({
            type: types.DELETE_TASK_REQUEST,
        });
    });
    it('deleteTaskSuccess: returns the expected action', function () {
        const action = actions.deleteTaskSuccess({});
        expect(action).to.eql({
            type: types.DELETE_TASK_SUCCESS,
            payload: {}
        });
    });
    it('deleteTaskError: returns the expected action', function () {
        const action = actions.deleteTaskError({});
        expect(action).to.eql({
            type: types.DELETE_TASK_ERROR,
            error: {}
        });
    });
});