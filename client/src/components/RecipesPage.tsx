import { Container, Grow, Grid } from '@material-ui/core';
import Recipes from './Recipes/Recipes';

interface Props {
    setCurrentId: (id: string | null) => void;
}

export default function RecipesPage({ setCurrentId }: Props){
    return (
        <div className='recipe-container'>
            <Container>
                <Grow in>
                    <Container>
                        <Grid className="device" container alignItems="stretch" spacing={3}>
                            <Grid item xs={12} sm={12}>
                                <Recipes setCurrentId={setCurrentId} />
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </div>
    );
}
