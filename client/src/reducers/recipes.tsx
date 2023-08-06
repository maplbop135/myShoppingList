import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from "../constants/actionTypes";
import { Recipe } from "../actions/recipes";

interface Action {
    type: typeof FETCH_ALL | typeof CREATE | typeof UPDATE | typeof DELETE | typeof LIKE;
    payload: Recipe | Recipe[];
}

const RecipeReducers = (recipes: Recipe[] = [], action: Action): Recipe[] => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload as Recipe[];
        case CREATE:
            return [...recipes, action.payload as Recipe];
        case LIKE:
        case UPDATE:
            return recipes.map<Recipe>((recipe) => {
                if(recipe._id === (action.payload as Recipe)._id){
                    return action.payload as Recipe;
                } else {
                    return recipe;
                }
            });
        case DELETE:
            return recipes.filter((recipe) => recipe._id !== (action.payload as Recipe)._id);
        default:
            return recipes;
    }
};

export default RecipeReducers;
