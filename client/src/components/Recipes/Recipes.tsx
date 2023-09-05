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
        var items: Recipe_type[] = [];
        for (var i = 0; i < records; i++) {
            items.push(
            recipes[i]
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
        <div className='grid grid-cols-10'>
            <div className='col-end-1 bg-orange-100 w-40'>필터</div>
            <div className='col-start-2 col-span-full bg-orange-100'>
                <div className='text-3xl bg-orange-100 text-left p-3 mb-10'>
                    오늘의 추천 레시피
                </div>
                <div className='text-3xl text-left p-3 mb-5 bg-orange-100'>
                    전체 레시피
                </div>
                {!recipes.length ? <CircularProgress /> : (
                    <InfiniteScroll
                        pageStart={0}
                        loadMore={loadMore}
                        hasMore={hasMore}
                        loader={<h4 className="loader">Loading...</h4>}
                        useWindow={false}
                        >
                        <Grid className={classes.mainContainer} container alignItems='stretch' spacing={3}> 
                            {showItems(recipes).map((recipe: Recipe_type) => (
                                <Grid key={recipe._id} item xs={12} sm={3}>
                                    <Recipe recipe={recipe} setCurrentId={setCurrentId} />
                                </Grid>
                            ))}
                        </Grid>
                    </InfiniteScroll>)}
            </div>
        </div>
    );
}

export default Recipes;