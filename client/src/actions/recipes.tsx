import {FETCH_ALL, CREATE, UPDATE, DELETE, LIKE} from '../constants/actionTypes';
import * as api from '../api';
import { Dispatch, AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export interface Recipe {
    _id: string;
    title: string;
    message: string;
    creator: string;
    tags: string[];
    selectedFile: string;
    likeCount: number;
    createdAt: Date;
}

// Action Creators
export const getRecipes = () => async (dispatch: ThunkDispatch<void, void, AnyAction>) => {
    try {
        const { data } = await api.fetchRecipes();

        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const createRecipe = (recipe: Recipe) => async (dispatch: Dispatch<AnyAction>) => {
    try {
        const { data } = await api.createRecipe(recipe);

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const updateRecipe = (id: string, recipe: Recipe) => async (dispatch: Dispatch<AnyAction>) => {
    try {
        const { data } = await api.updateRecipe(id, recipe);

        dispatch({ type: UPDATE, payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const deleteRecipe = (id: string) => async (dispatch: ThunkDispatch<void, void, AnyAction>) => {
    try {
        await api.deleteRecipe(id);

        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error);
    }
}

export const likeRecipe = (id: string) => async (dispatch: ThunkDispatch<void, void, AnyAction>) => {
    try {
        const { data } = await api.likeRecipe(id);

        dispatch({ type: LIKE, payload: data })
    } catch (error) {
        console.log(error);
    }
}