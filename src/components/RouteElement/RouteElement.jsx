import { Grid, Button, Typography } from "@mui/material"
import { useState } from "react";

let difficultyColor = (difficulty)=>{
    switch(difficulty){
        case 'easy' :
            return 'green';
        case 'medium' :
            return 'yellow';
        case 'hard' :
            return 'red';
    }
}


const RouteElement = (infoRoute) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
      setIsHovered(true);
    };
  
    const handleUnhover = () => {
      setIsHovered(false);
    };
   console.log(infoRoute.infoRoute)
    return (
            <Grid
                item
                sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    backgroundColor: 'rgba(255,255,255,0.4)',
                    width: '100%',
                    overflowY: 'hidden',
                    borderRadius:'10px',
                    transition: 'transform 0.5s, height 0.5s ease-in-out',
                    height: isHovered ? 200 : 100, // Adjust the height based on hover state
                    paddingY:2}}
                onMouseEnter={handleHover}
                onMouseLeave={handleUnhover}
                >
                
                <div style={{
                    position:'relative',
                    width:'20%',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'middle',
                    flexDirection:'column',
                    left:0}}>

                    <p style={{
                        textAlign:'center',
                        color:difficultyColor(infoRoute.infoRoute.difficulty)}}>

                        { infoRoute.infoRoute.difficulty}

                    </p>
                </div>

                <div style={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    width:'60%'}}>
                         
                    <h2 style={{
                        display: 'flex',
                        justifyContent: 'center',
                        textAlign: 'center',
                        cursor: 'pointer',
                        height:40,
                        margin:0}}>
                        
                        {infoRoute.infoRoute.name}
                    </h2>
                    <div style={{
                        display:'flex',
                        width:'100%',
                        height:'100%',
                        flexDirection:'column',
                        opacity: isHovered ? 1 : 0, 
                        height: isHovered ? 100 : 0, 
                        transition: 'height 0.5s ease-in-out, opacity 1s ease-in-out',marginTop:'auto'}}>
                        <p style={{
                            textAlign:'center'
                        }}>
                            Total distance: { infoRoute.infoRoute.distance } mi
                        </p>
                        <p style={{
                            textAlign:'center'
                        }}>
                            Elevation: { infoRoute.infoRoute.elevation_gain} fts
                        </p>
                    </div>
                    
                </div>

                <div style={{
                    display:'flex',
                    position:'relative',
                    width:'20%',
                    justifyContent:'center',
                    alignItems:'middle'
                }}>

                    <p 
                        style={{
                        textAlign:'center'}}>
                        
                        { infoRoute.infoRoute.location}
                    </p>
                    
                </div>



            </Grid>
    )
}

export default RouteElement