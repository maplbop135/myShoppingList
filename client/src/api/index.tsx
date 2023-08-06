import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { Recipe } from '../actions/recipes';
import { CredentialResponse } from '@react-oauth/google';

const recipeUrl = `http://localhost:5000/recipes`;
const authUrl = `http://localhost:5000/auth`;

export const fetchRecipes = () => axios.get(recipeUrl);
export const createRecipe = (newRecipe: Recipe) => axios.post(recipeUrl, newRecipe);
export const updateRecipe = (id: string, updatedRecipe: Recipe) => axios.patch(`${recipeUrl}/${id}`, updatedRecipe);
export const deleteRecipe = (id: string) => axios.delete(`${recipeUrl}/${id}`);
export const likeRecipe = (id: string) => axios.patch(`${recipeUrl}/${id}/likeRecipe`);

interface Decoded {
    name: string;
    picture: string;
    sub: string;
}

interface User {
    _id: string;
    _type: string;
    userName: string;
    image: string;
}

export const createOrGetUser = async (response: CredentialResponse) => {
    const decoded = response.credential? jwt_decode(response.credential) as Decoded : { name: '', picture: '', sub: ''};

    const { name, picture, sub } = decoded;

    const user: User = {
        _id: sub,
        _type: 'user',
        userName: name,
        image: picture   
    }

    await axios.post(authUrl, user);
};