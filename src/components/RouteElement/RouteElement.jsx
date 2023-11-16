import { Grid, Button } from "@mui/material"
import { useState } from "react";
import { Link } from 'react-router-dom'

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


const RouteElement = ({infoRoute}) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
      setIsHovered(true);
    };
  
    const handleUnhover = () => {
      setIsHovered(false);
    };
   console.log(infoRoute)
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
                    height: isHovered ? 250 : 100, // Adjust the height based on hover state
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
                        color:difficultyColor(infoRoute.difficulty)}}>

                        { infoRoute.difficulty}

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
                        
                        {infoRoute.name}
                    </h2>
                    <div style={{
                        
                        display:'flex',
                        justifyContent: 'center',
                        width:'100%',
                        height:'100%',
                        flexDirection:'column',
                        opacity: isHovered ? 1 : 0, 
                        height: isHovered ? 150 : 0, 
                        transition: 'height 0.5s ease-in-out, opacity 1s ease-in-out',marginTop:'auto'}}>
                        <p style={{
                            textAlign:'center'
                        }}>
                            Total distance: { infoRoute.distance } mi
                        </p>
                        <p style={{
                            textAlign:'center'
                        }}>
                            Elevation: { infoRoute.elevation_gain} fts
                        </p>
                        <div width='100%'>
                        <Link to={`/routes/${infoRoute._id}`}>
                     <Button fullWidth='100%' >More Info</Button></Link>
                     </div>
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
                        
                        { infoRoute.location}
                    </p>
                    
                </div>



            </Grid>
    )
}

export default RouteElement





// import { Grid, Button, Typography } from "@mui/material"
// import { Link } from 'react-router-dom'

// const RouteElement = ({infoRoute}) => {
//     return (
        
//             <Grid
//                 item
//                 sx={{
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     backgroundColor: 'rgba(255,255,255,0.4)',
//                     width: '100%',
//                     height: 100,
//                     overflowY: 'hidden',
//                     borderRadius:'10px',
//                     transition: 'transform 0.5s, height 0.5s ease-in-out',
//                     '&:hover': {
//                         height:'200px',
//                         transform: 'scaleY(0.95)',
//                     }
    
//                 }}>
//                 {/* <h3 style={{
//                     display: 'flex',
//                     justifyContent: 'center',
//                     textAlign: 'center',
//                     width: '50%',
//                     marginY: 'auto',
//                     marginX: 'auto',
//                     cursor: 'pointer'
//                 }}

//                 >{infoRoute.name}</h3> */}
//                 {/* <h5>{infoRoute.location}</h5> */}
//                 <Typography paddingTop='40px' variant="h4">{infoRoute.name}</Typography>
//                 <Typography variant="h5">Location: {infoRoute.location}</Typography>
                
//                 <Link to={`/routes/${infoRoute._id}`}>
//                     <Button>More Info</Button></Link>
//              </Grid>
             
//     )
// }

// export default RouteElement