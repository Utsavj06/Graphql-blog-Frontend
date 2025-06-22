import { Box, Typography } from '@mui/material'
import { homepage } from '../../styles/homepage-style'

const Homepage = () => {
  return (
    <Box sx={homepage.container}>
      <Box sx={homepage.wrapper}>
        <Typography sx={homepage.text}>
          Write and Share Your Blog Now
        </Typography>
        {/*@ts-ignore*/}
        <img style={{...homepage.images, height:'50%', width:'50%'}} src='/images/blog.jpg' alt="Blog" /> 
      </Box> 
      <Box sx={homepage.wrapper}>
      {/*@ts-ignore*/}
      <img style={{...homepage.images, height:'50%', width:'50%'}} src='/images/publish.jpg' alt="Publish" /> 
        <Typography sx={homepage.text}>
          Write and Share Your Blog Now
        </Typography>
      </Box> 
      <Box sx={homepage.wrapper}>
        <Typography sx={homepage.text}>
          Write and Share Your Blog Now
        </Typography>
        {/*@ts-ignore*/}
        <img style={{...homepage.images, height:'50%', width:'50%'}} src='/images/article.webp' alt="Blog" /> 
      </Box>
    </Box>
  )
}

export default Homepage
