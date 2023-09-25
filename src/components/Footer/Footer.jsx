import { Container, Box, Button } from "@mui/material";
import { AiOutlineFacebook } from '@react-icons/all-files/ai/AiOutlineFacebook'
import { FiInstagram } from '@react-icons/all-files/fi/FiInstagram'
import { FiYoutube } from '@react-icons/all-files/fi/FiYoutube'



const Footer = () => {

    return (
        <Container>
            <Box sx={{height: '10vh', paddingX: '2rem',display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
                <Button><AiOutlineFacebook fontSize='20px'/></Button>
                <Button><FiInstagram fontSize='20px'/></Button>
                <Button><FiYoutube  fontSize='20px'/></Button>
            </Box>
        </Container>
        
    )
}

export default Footer