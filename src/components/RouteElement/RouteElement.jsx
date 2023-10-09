import { Grid } from "@mui/material"

const RouteElement = ({infoRoute}) => {
    return (
            <Grid
                item
                sx={{
                    display: 'flex',
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
                <h3 style={{
                    display: 'flex',
                    justifyContent: 'center',
                    textAlign: 'center',
                    width: '50%',
                    marginY: 'auto',
                    marginX: 'auto',
                    cursor: 'pointer'
                }}

                >{infoRoute.name}</h3>
                <p>{infoRoute.location}</p>
            </Grid>
    )
}

export default RouteElement