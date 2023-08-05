import { combineReducers } from 'redux';

import recipes from './recipes';
import auth from './auth';

export default combineReducers({
    recipes,
    auth,
});