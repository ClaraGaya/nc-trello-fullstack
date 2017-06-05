import {combineReducers} from 'redux';

import {reducerLists} from './lists';
import {reducerTasks} from './tasks';


const reducer = combineReducers({
    lists: reducerLists,
    tasks: reducerTasks
});

export default reducer;