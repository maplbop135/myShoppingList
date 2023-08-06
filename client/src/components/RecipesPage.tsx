import { Container, Grow, Grid } from '@material-ui/core';
import Recipes from './Recipes/Recipes';
import Form from './Form/Form';

interface Props {
    currentId: string | null;
    setCurrentId: (id: string | null) => void;
}

export default function RecipesPage({ currentId, setCurrentId }: Props){
    return (
        <div className='recipe-container'>
            <Container maxWidth="lg">
                <Grow in>
                    <Container>
                        <Grid className="device" container justifyContent="space-between" alignItems="stretch" spacing={3}>
                            <Grid item xs={12} sm={7}>
                                <Recipes setCurrentId={setCurrentId} />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                { currentId === null ? <Form currentId='' setCurrentId={setCurrentId} />
                                                     : <Form currentId={currentId} setCurrentId={setCurrentId} /> }
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </div>
    );
}
