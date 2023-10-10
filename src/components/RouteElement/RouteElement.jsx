import { Grid, Button, Typography } from "@mui/material"
import { Link } from 'react-router-dom'

const RouteElement = ({infoRoute}) => {
    return (
        
            <Grid
                item
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(255,255,255,0.4)',
                    width: '100%',
                    height: 100,
                    overflowY: 'hidden',
                    borderRadius:'10px',
                    transition: 'transform 0.5s, height 0.5s ease-in-out',
                    '&:hover': {
                        height:'200px',
                        transform: 'scaleY(0.95)',
                    }
    
                }}>
                {/* <h3 style={{
                    display: 'flex',
                    justifyContent: 'center',
                    textAlign: 'center',
                    width: '50%',
                    marginY: 'auto',
                    marginX: 'auto',
                    cursor: 'pointer'
                }}

                >{infoRoute.name}</h3> */}
                {/* <h5>{infoRoute.location}</h5> */}
                <Typography paddingTop='40px' variant="h4">{infoRoute.name}</Typography>
                <Typography variant="h5">Location: {infoRoute.location}</Typography>
                
                <Link to={`/routes/${infoRoute._id}`}>
                    <Button>More Info</Button></Link>
             </Grid>
             
    )
}

export default RouteElement