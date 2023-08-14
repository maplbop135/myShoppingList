import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { Recipe, createRecipe, updateRecipe } from '../../actions/recipes'
import { RootState } from '../../RootState';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

interface Props {
    currentId: string;
    setCurrentId: (id: string | null) => void
}

const emptyState = {
    _id: '',RCP_NM: '',RCP_SEQ: 0,HASH_TAG: [''],
    RCP_PARTS_DTLS: '',ATT_FILE_NO_MAIN: '',ATT_FILE_NO_MK: '',RCP_PAT2: '',RCP_WAY2: '',RCP_NA_TIP: '',
    INFO_NA: 0,INFO_WGT: 0,INFO_PRO: 0,INFO_FAT: 0,INFO_CAR: 0,INFO_ENG: 0,
    creator: '',likeCount: 0,createdAt: new Date(),updatedAt: new Date(),
    MANUAL01: '',MANUAL02: '',MANUAL03: '',MANUAL04: '',MANUAL05: '',MANUAL06: '',MANUAL07: '',MANUAL08: '',MANUAL09: '',MANUAL10: '',
    MANUAL11: '',MANUAL12: '',MANUAL13: '',MANUAL14: '',MANUAL15: '',MANUAL16: '',MANUAL17: '',MANUAL18: '',MANUAL19: '',MANUAL20: '',
    MANUAL_IMG01: '',MANUAL_IMG02: '',MANUAL_IMG03: '',MANUAL_IMG04: '',MANUAL_IMG05: '',MANUAL_IMG06: '',MANUAL_IMG07: '',MANUAL_IMG08: '',MANUAL_IMG09: '',MANUAL_IMG10: '',
    MANUAL_IMG11: '',MANUAL_IMG12: '',MANUAL_IMG13: '',MANUAL_IMG14: '',MANUAL_IMG15: '',MANUAL_IMG16: '',MANUAL_IMG17: '',MANUAL_IMG18: '',MANUAL_IMG19: '',MANUAL_IMG20: ''
}

const Form = ({ currentId, setCurrentId }: Props) => {
    const [recipeData, setRecipeData] = useState(emptyState);
    const recipe = useSelector((state: RootState) => currentId?
                   state.recipes.find((p: Recipe) => p._id === currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch<ThunkDispatch<void, void, AnyAction>>();
    
    useEffect(() => {
        if(recipe) setRecipeData(recipe);
    }, [recipe])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(currentId) {
            dispatch(updateRecipe(currentId, recipeData));    
        } else {
            dispatch(createRecipe(recipeData));
        }

        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setRecipeData(emptyState);
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">레시피 {currentId ? '편집' : '추가'}</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={recipeData.creator} onChange={(e) => setRecipeData({ ...recipeData, creator: e.target.value })}/>
                <TextField name="title" variant="outlined" label="Title" fullWidth value={recipeData.RCP_NM} onChange={(e) => setRecipeData({ ...recipeData, RCP_NM: e.target.value })}/>
                <TextField name="message" variant="outlined" label="Message" fullWidth value={recipeData.RCP_PARTS_DTLS} onChange={(e) => setRecipeData({ ...recipeData, RCP_PARTS_DTLS: e.target.value })}/>
                <TextField name="tags" variant="outlined" label="Tags" fullWidth value={recipeData.HASH_TAG} onChange={(e) => setRecipeData({ ...recipeData, HASH_TAG: e.target.value.split(',') })}/>
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({base64}: {base64: string}) => setRecipeData({ ...recipeData, ATT_FILE_NO_MAIN: base64})} />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>제출</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>취소</Button>
            </form>
        </Paper>
    );
}

export default Form;