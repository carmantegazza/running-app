import { ButtonGroup, Button, Grid} from "@mui/material";
import { HiUser } from "@react-icons/all-files/hi/HiUser";
import { teal } from '@mui/material/colors';

const LoginCont = () => {

    return (
        <Grid container>  
            <ButtonGroup variant="contained" aria-label="button group">            
                <Button variant='outlined'  
                        startIcon={<HiUser 
                                    fontSize={35}
                                    color="#004aad" />}>    
                    Log In</Button>
            <Button>Sign Up</Button>
        </ButtonGroup>
      </Grid>
    )
}

export default LoginCont;