import { Box, Button, Typography } from '@mui/material'
import { homepage } from '../../styles/homepage-style'

const Footer = () => {
  return (
    <Box sx={homepage.footerContainer}>
        <Button variant='contained' sx={homepage.footerBtn}>View Articles</Button>
        <Typography>Made With Love</Typography>
        <Button variant='contained' sx={homepage.footerBtn}>Publish One</Button>      
    </Box>
  )
}

export default Footer
