import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from "../constants/actionTypes";

const RecipeReducers = (recipes = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...recipes, action.payload];
        case LIKE:
            return recipes.map((recipe) => recipe._id === action.payload._id ? action.payload : recipe);
        case UPDATE:
            return recipes.map((recipe) => recipe._id === action.payload._id ? action.payload : recipe);
        case DELETE:
            return recipes.filter((recipe) => recipe._id !== action.payload);
        default:
            return recipes;
    }
};

export default RecipeReducers;