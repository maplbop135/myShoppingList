import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { Recipe, createRecipe, updateRecipe } from '../../actions/recipes'
import { RootState } from '../../RootState';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction, CombinedState } from 'redux';

interface Props {
    currentId: string;
    setCurrentId: (id: string | null) => void
}

const Form = ({ currentId, setCurrentId }: Props) => {
    const [recipeData, setRecipeData] = useState({creator: '', title: '', message: '', tags: [] as string[], selectedFile: '', _id: '', likeCount: 0, createdAt: new Date() });
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
        setRecipeData({ creator: '', title: '', message: '', tags: [], selectedFile: '', _id: '', likeCount: 0, createdAt: new Date() });
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">레시피 {currentId ? '편집' : '추가'}</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={recipeData.creator} onChange={(e) => setRecipeData({ ...recipeData, creator: e.target.value })}/>
                <TextField name="title" variant="outlined" label="Title" fullWidth value={recipeData.title} onChange={(e) => setRecipeData({ ...recipeData, title: e.target.value })}/>
                <TextField name="message" variant="outlined" label="Message" fullWidth value={recipeData.message} onChange={(e) => setRecipeData({ ...recipeData, message: e.target.value })}/>
                <TextField name="tags" variant="outlined" label="Tags" fullWidth value={recipeData.tags} onChange={(e) => setRecipeData({ ...recipeData, tags: e.target.value.split(',') })}/>
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({base64}: {base64: string}) => setRecipeData({ ...recipeData, selectedFile: base64})} />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>제출</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>취소</Button>
            </form>
        </Paper>
    );
}

export default Form;