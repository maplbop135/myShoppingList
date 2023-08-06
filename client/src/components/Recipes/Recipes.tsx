import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Recipe from './Recipe/Recipe';
import useStyles from './styles';
import { Recipe as Recipe_type } from '../../actions/recipes';

interface Props {
    setCurrentId: (id: string) => void;
}

const Recipes = ({ setCurrentId }: Props) => {
    const recipes = useSelector((state: { recipes: Recipe_type[] }) => state.recipes);
    const classes = useStyles();

    console.log(recipes);

    return (
        !recipes.length ? <CircularProgress /> : (
            <Grid className={classes.mainContainer} container alignItems='stretch' spacing={3}> 
                {recipes.map((recipe: Recipe_type) => (
                    <Grid key={recipe._id} item xs={12} sm={6}>
                        <Recipe recipe={recipe} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Recipes;