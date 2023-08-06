import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './styles';
import { useDispatch } from 'react-redux';

import { Recipe as Recipe_type, deleteRecipe, likeRecipe } from '../../../actions/recipes';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

interface Props {
    recipe: Recipe_type;
    setCurrentId: (id: string) => void;
}

const Recipe = ({ recipe, setCurrentId }: Props) => {
    const classes = useStyles();
    const dispatch = useDispatch<ThunkDispatch<void, void, AnyAction>>();

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={recipe.selectedFile} title={recipe.title} />
            <div className={classes.overlay}>
                <Typography variant='h6'>{recipe.creator}</Typography>
                <Typography variant='body2'>{moment(recipe.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size='small' onClick={() => setCurrentId(recipe._id)}>
                    <MoreHorizIcon fontSize="medium" />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{recipe.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className={classes.title} variant="h5" gutterBottom>{recipe.title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{recipe.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(likeRecipe(recipe._id))}>
                    <ThumbUpAltIcon fontSize="small" />
                    &nbsp; Like &nbsp; {recipe.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={() => dispatch(deleteRecipe(recipe._id))}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

export default Recipe;