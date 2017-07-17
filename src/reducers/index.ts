import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading, testInteger } from './items';

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading,
    testInteger
});