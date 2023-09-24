import { ButtonGroup, Button, Grid} from "@mui/material";
import { HiUser } from "@react-icons/all-files/hi/HiUser";
import { teal } from '@mui/material/colors';

const LoginCont = () => {

    const color1= teal[400]

    return (
        <Grid container> 
            <HiUser 
            fontSize={35}
            color="#7C83FD" />
        <ButtonGroup variant="contained" aria-label="button group">            
            <Button variant='outlined'>Sign In</Button>
            <Button>Sign Up</Button>
        </ButtonGroup>
      </Grid>
    )
}

export default LoginCont;