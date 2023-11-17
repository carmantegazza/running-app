import React , { useEffect , useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ButtonGroup, Button, Grid } from "@mui/material";
import { HiUser } from "@react-icons/all-files/hi/HiUser";
import { useSelector, useDispatch } from 'react-redux';
import userActions from '../../redux/actions/userActions';

const LoginCont = () => {
  const dispatch = useDispatch()
  const user = useSelector((store) => store.userReducer.user);
  const userChange = useSelector((store) => store.userReducer.userChange);
  const navigate = useNavigate();
  // const [userChange, setUserChange] = useState(false);
  
  useEffect(() => { 
    userChange && navigate('/')
  }, [userChange]);

  // const { SignOutUser } = userActions;
  return (
    <>
    {/* {user && <Navigate to='/' replace={true} />} */}
    <Grid container justifyContent='flex-end'>
      { !user ? 
      <ButtonGroup variant="contained" aria-label="button group">
        <Link to="/login">
          <Button variant='outlined' startIcon={<HiUser fontSize={35} color="#004aad" />}>
            Log In
          </Button>
        </Link>
        {/* <Link to="/signin">
          <Button variant='outlined' startIcon={<HiUser fontSize={35} color="#004aad" />}>
            Sign In
          </Button>
        </Link>
        <Link to="/signup">
          <Button>Sign Up</Button>
        </Link> */}
      </ButtonGroup> : 
      <ButtonGroup variant="contained" aria-label="button group">
        
          <Button onClick={() => dispatch(userActions.SignOutUser(null))} variant='outlined' startIcon={<HiUser fontSize={35} color="#004aad" />}>
            Sign Out
          </Button>
       
        </ButtonGroup>
      }
    </Grid>
    </>
  );
}

export default LoginCont;

  

// const LoginCont = () => {

//     return (
//         <Grid container
//                 justifyContent='flex-end'>  
//             <ButtonGroup variant="contained" aria-label="button group">            
//                 <Button variant='outlined'  
//                         startIcon={<HiUser 
//                                     fontSize={35}
//                                     color="#004aad" />}>    
//                     Sign In</Button>
//             <Button>Sign Up</Button>
//         </ButtonGroup>
//       </Grid>
//     )
// }

// export default LoginCont;