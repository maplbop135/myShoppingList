import axios from 'axios';
import jwt_decode from 'jwt-decode';

const recipeUrl = `http://localhost:5000/recipes`;
const authUrl = `http://localhost:5000/auth`;

export const fetchRecipes = () => axios.get(recipeUrl);
export const createRecipe = (newRecipe) => axios.post(recipeUrl, newRecipe);
export const updateRecipe = (id, updatedRecipe) => axios.patch(`${recipeUrl}/${id}`, updatedRecipe);
export const deleteRecipe = (id) => axios.delete(`${recipeUrl}/${id}`);
export const likeRecipe = (id) => axios.patch(`${recipeUrl}/${id}/likeRecipe`);

export const createOrGetUser = async (response) => {
    const decoded = jwt_decode(response.credential);

    const { name, picture, sub } = decoded;

    const user = {
        _id: sub,
        _type: 'user',
        userName: name,
        image: picture   
    }

    await axios.post(authUrl, user);
};