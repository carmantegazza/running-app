import { Box, Container, Grid } from '@mui/material'
import RouteElement from '../RouteElement/RouteElement'
import './RoutesContainer.css'

const RoutesContainer = ({routes}) => {

return (
    <Box>
      {/* <Container><Container/> */}
      <Container sx={{ 
      width: '100vw',
      height: '84vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingY: '20px',
      boxSizing:'border-box' 
    }}>
      <Box sx={{
        height: '100%',
        width: 600,
        boxSizing: 'border-box',
        overflow: 'hidden',
        boxShadow: 'inset 0px 0px 100px 10px rgba(255,255,255,0.4), 0px 0px 30px 5px rgba(0,0,0,0.6),0px 0px 150px 15px rgba(0,0,0,0.3)',
        borderRadius: 2,
        backgroundColor: 'rgba(63, 101, 154,0.8)',
      }}>
        <div
          style={{
            height: '99%',
            overflow: 'auto',
            padding: '10px',
            marginY:'10px',

          }}>
          <Grid
            container
            direction='column'
            style={{
              justifyContent: 'center',
              width: '100%',
              marginX: 'auto',
              gap: 5
            }}>
             {routes.length > 0 && 
              routes.map((route) => {
                return (
              <RouteElement key={route.id} infoRoute={route} className='routeElement'></RouteElement>
              )
            })}
          </Grid>
        </div>
      </Box>
    </Container>
    </Box>
  )
}

export default RoutesContainer