import { useState } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Recipe from './Recipe/Recipe';
import useStyles from './styles';
import { Recipe as Recipe_type } from '../../actions/recipes';
import InfiniteScroll from "react-infinite-scroller";

interface Props {
    setCurrentId: (id: string) => void;
}

const Recipes = ({ setCurrentId }: Props) => {
    const recipes = useSelector((state: { recipes: Recipe_type[] }) => state.recipes);
    const classes = useStyles();
    const showItems = (recipes: Recipe_type[]) => {
        var items = [];
        for (var i = 0; i < records; i++) {
            items.push(
            <div className="post" key={recipes[i]._id}>
                <h3>{`${recipes[i].RCP_NM} - ${recipes[i]._id}`}</h3>
                <p>{recipes[i].RCP_PARTS_DTLS}</p>
            </div>
            );
        }
        return items;
    };
    const itemsPerPage = 20;
    const [hasMore, setHasMore] = useState(true);
    const [records, setrecords] = useState(itemsPerPage);
    const loadMore = () => {
        if (records === recipes.length) {
            setHasMore(false);
        } else {
            setTimeout(() => {
                setrecords(records + itemsPerPage);
            }, 2000);
        }
    }

    console.log(recipes);

    return (
        !recipes.length ? <CircularProgress /> : (
            <InfiniteScroll
                pageStart={0}
                loadMore={loadMore}
                hasMore={hasMore}
                loader={<h4 className="loader">Loading...</h4>}
                useWindow={false}
                >
                {showItems(recipes)}
            </InfiniteScroll>
            // <Grid className={classes.mainContainer} container alignItems='stretch' spacing={3}> 
            //     {recipes.map((recipe: Recipe_type) => (
            //         <Grid key={recipe._id} item xs={12} sm={3}>
            //             <Recipe recipe={recipe} setCurrentId={setCurrentId} />
            //         </Grid>
            //     ))}
            // </Grid>
        )
    );
}

export default Recipes;