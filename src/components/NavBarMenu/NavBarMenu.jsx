import React from 'react'
import {Button, Menu, MenuItem} from '@mui/material'
import { Link } from 'react-router-dom';
import { RiMenu5Fill } from '@react-icons/all-files/ri/RiMenu5Fill'

const NavBarMenu = () => {

  const pages = ['Home', 'Routes', 'Events', 'News'];

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button  id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <RiMenu5Fill fontSize='1.8rem' color='#004aad'/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {pages.map((page) => (
          <Link to={page} key={page} style={{textDecoration: 'none'}}>
              <MenuItem onClick={handleClose} sx={{color: '#004aad'}} disabled={ page === 'News'}>{page}</MenuItem>
          </Link>
        ))}
      </Menu>
    </div>
  );

  // return (
  //   <Box  sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
  //       <RiMenu5Fill fontSize='1.8rem' color='#004aad'/>
  //   </Box>
  // )
}

export default NavBarMenu