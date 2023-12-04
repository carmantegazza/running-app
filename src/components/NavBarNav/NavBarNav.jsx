import React from 'react'
import { Link } from 'react-router-dom';
import { Box, Button,Tooltip } from '@mui/material'

const NavBarNav = () => {

    const pages = ['Routes', 'Events', 'News'];

  return (
    <Box sx={{ width:'auto',flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: '2rem'}}>
      {pages.map((page) => (
          page === 'News' ? (
              <Tooltip
                title="Soon"
                arrow
                TransitionProps={{timeout:500}}
                followCursor>
                  <span>
                    <Button
                      sx={{ fontSize: '20px', my: 2, color: '#004aad', display: 'block', textDecoration: 'none' } }
                      disabled>
                      {page}
                    </Button>
                  </span>
                </Tooltip>
              )
            :
              (
                <Link to={page} key={page} style={{textDecoration: 'none'}} disabled>
                  <Button
                    sx={{ fontSize: '20px', my: 2, color: '#004aad', display: 'block', textDecoration: 'none' }}>
                    {page}
                  </Button>
                </Link>
              )
                      
        ))}
    </Box>
  )
}


export default NavBarNav