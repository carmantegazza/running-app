import { Container, Grid } from "@mui/material";

const Footer = () => {

    return (
            <Grid container 
            spacing={2}
            height={15}
            paddingX={3}
            alignContent= 'end'>
                <Grid p xs={8}>
                    <p>nav options</p>
                </Grid>
                <Grid p xs={4}>
                    <p>nav options</p>
                </Grid>
            </Grid>
        
    )
}

export default Footer