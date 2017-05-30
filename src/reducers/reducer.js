import {combineReducers} from 'redux';

import reducerLists from './lists';



const reducer = combineReducers({
    lists: reducerLists
});

export default reducer;