import {FETCH_ALL, CREATE, UPDATE, DELETE, LIKE} from '../constants/actionTypes';
import * as api from '../api';
import { Dispatch, AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export interface Recipe {
    _id: string,
    RCP_NM: string,
    RCP_SEQ: number,
    HASH_TAG: string[],
    RCP_PARTS_DTLS: string,
    ATT_FILE_NO_MAIN: string,
    ATT_FILE_NO_MK: string,
    RCP_PAT2: string,
    RCP_WAY2: string,
    RCP_NA_TIP: string,
    INFO_NA: number,
    INFO_WGT: number,
    INFO_PRO: number,
    INFO_FAT: number,
    INFO_CAR: number,
    INFO_ENG: number,
    creator: string,
    likeCount: number,
    createdAt: Date,
    updatedAt: Date,
    MANUAL01: string,
    MANUAL02: string,
    MANUAL03: string,
    MANUAL04: string,
    MANUAL05: string,
    MANUAL06: string,
    MANUAL07: string,
    MANUAL08: string,
    MANUAL09: string,
    MANUAL10: string,
    MANUAL11: string,
    MANUAL12: string,
    MANUAL13: string,
    MANUAL14: string,
    MANUAL15: string,
    MANUAL16: string,
    MANUAL17: string,
    MANUAL18: string,
    MANUAL19: string,
    MANUAL20: string,
    MANUAL_IMG01: string,
    MANUAL_IMG02: string,
    MANUAL_IMG03: string,
    MANUAL_IMG04: string,
    MANUAL_IMG05: string,
    MANUAL_IMG06: string,
    MANUAL_IMG07: string,
    MANUAL_IMG08: string,
    MANUAL_IMG09: string,
    MANUAL_IMG10: string,
    MANUAL_IMG11: string,
    MANUAL_IMG12: string,
    MANUAL_IMG13: string,
    MANUAL_IMG14: string,
    MANUAL_IMG15: string,
    MANUAL_IMG16: string,
    MANUAL_IMG17: string,
    MANUAL_IMG18: string,
    MANUAL_IMG19: string,
    MANUAL_IMG20: string,
};

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