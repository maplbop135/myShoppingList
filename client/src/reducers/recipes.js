const RecipeReducers = (recipes = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...recipes, action.payload];
        case 'UPDATE':
        case 'LIKE':
            return recipes.map((recipe) => postMessage._id === action.payload._id ? action.payload : recipe);
        case 'DELETE':
            return recipes.filter((recipe) => recipe._id !== action.payload);
        default:
            return recipes;
    }
};

export default RecipeReducers;