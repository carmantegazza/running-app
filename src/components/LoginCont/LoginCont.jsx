import React , { useEffect , useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Tooltip, Zoom } from "@mui/material";
import { HiUser } from "@react-icons/all-files/hi/HiUser";
import { useSelector, useDispatch } from 'react-redux';
import userActions from '../../redux/actions/userActions';
import { Divider } from '@mui/material'

// {onButtonClick,userConfigOpen}
const LoginCont = (props) => {
  const dispatch = useDispatch()
  const user = useSelector((store) => store.userReducer.user);
  const userChange = useSelector((store) => store.userReducer.userChange);
  const navigate = useNavigate();
  const userConfigOpen = props.userConfigOpen
  const onButtonClick = props.onButtonClick
  const userConfigRef = useRef(null)
  const handleSignOut = () => {
    dispatch(userActions.SignOutUser(null))
    onButtonClick()
  }

  useEffect(() => {
    userChange && navigate('/')
  }, [userChange]);

  console.log(user)

  return (
    <>
      {!user ?
        <section>
          <Link to="/login">
            <Button variant='outlined' startIcon={<HiUser fontSize={35} color="#004aad" />}
            style={{width:'auto'}}>
              Log In
            </Button>
          </Link>
        </section>
        :
        <>
          <section style={{ width: 350, display: 'flex', alignItems: 'center', transform: userConfigOpen ? '' : 'translateX(85%)', transition: 'transform 1s ease-in-out' }}>
            <Button onClick={onButtonClick} variant='outlined' style={{ marginRight: 10, width: 30, height: '90%', borderRadius: '10px' }}>
              <HiUser fontSize={35} color="#004aad" />
            </Button>

            <div style={{ width: '100%', alignItems: 'center', justifyContent: 'space-between', display: 'flex', opacity: userConfigOpen ? '1' : '0', transition: 'opacity 1s ease-in-out' }}>
              <Tooltip
                arrow
                TransitionProps={{ timeout: 500 }}
                TransitionComponent={Zoom}
                followCursor>
                <span>
                  <Link to="/profile">
                    <Button >Profile</Button>
                  </Link>
                </span>
              </Tooltip>

              <Divider variant="middle" orientation="vertical" flexItem sx={{ opacity: userConfigOpen ? '1' : '0', transition: 'opacity 1s ease-in-out' }}></Divider>

              <Tooltip
                title="Soon"
                arrow
                TransitionProps={{ timeout: 500 }}
                TransitionComponent={Zoom}
                followCursor>
                <span>
                  <Button disabled>Something</Button>
                </span>
              </Tooltip>

              <Divider variant="middle" orientation="vertical" flexItem sx={{ opacity: userConfigOpen ? '1' : '0', transition: 'opacity 1s ease-in-out' }}></Divider>

              <Button onClick={handleSignOut}>
                Sign Out
              </Button>
            </div>
          </section>
        </>
      }
    </>
  );
}/* <Button onClick={() => dispatch(userActions.SignOutUser(null))} variant='outlined' startIcon={<HiUser fontSize={35} color="#004aad" />}>
            Sign Out
          </Button> */

export default LoginCont;

