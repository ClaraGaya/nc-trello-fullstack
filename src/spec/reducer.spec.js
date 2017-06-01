import { expect } from 'chai';
import * as actionsTasks from '../actions/actions.tasks';
import * as actionsLists from '../actions/actions.tasks';

import { getLists, addList, updateList, removeList } from '../reducers/lists';
import { getTasks, addTask, updateTask, removeTask } from '../reducers/tasks';

const initialState = {
    lists: {
        byId: {
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
            },
            4: {
                id: 4,
                listname:"Done"
            }
        }
    },
    tasks: {
        byId: {
            1: {
                id: 1,
                body:"Test React reducers",
                parentid: 2
            },
            2: {
                id: 2,
                body:"Test React actions",
                parentid: 1
            },
            3: {
                id: 3,
                body:"Test controllers",
                parentid: 3
            },
            4: {
                id: 4,
                body:"Add addTask functionality",
                parentid: 4
            }
        }
    }
};


  

