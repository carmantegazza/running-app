import {Grid, ButtonGroup, Button} from '@mui/material';

export const NavBar = () => {

<nav>
<Grid container spacing={2}>
  <Grid item s={4}>
    <p>algo</p>
  </Grid>
  <Grid item s={8}>
  <ButtonGroup variant="contained" aria-label="outlined primary button group">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
  </Grid>
  <Grid item s={12}>
    <p>algo</p>
  </Grid>
</Grid>
</nav>

}