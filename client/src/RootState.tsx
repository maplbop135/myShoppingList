import { combineReducers } from 'redux';
import recipesReducer from './reducers/recipes';

const rootReducer = combineReducers({
  recipes: recipesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;