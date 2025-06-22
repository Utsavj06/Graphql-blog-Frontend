import { Box, Typography } from '@mui/material'
import React from 'react'
import { authPage } from '../../styles/auth-style'
import { ImBlogger } from 'react-icons/im'

const Auth = () => {
  return (
    <Box sx={authPage.container}>
      <Box sx={authPage.logoTitle}>
         {/*@ts-ignore*/}
         <ImBlogger size={"30px"} style={{ borderRadius: "50%", padding: "10px", background: "#6c5252" }} />
         <Typography sx={authPage.logoText} variant='h4'>DevBlog</Typography>
         <Box sx={authPage.formContainer}>
          <Typography sx={authPage.logoText}>Login</Typography>
         </Box>
      </Box>
    </Box>
  )
}

export default Auth
