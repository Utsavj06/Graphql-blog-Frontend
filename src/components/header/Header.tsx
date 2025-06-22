import { AppBar, Box, Button, Tab, Tabs, Toolbar } from '@mui/material'
import { ImBlogger } from "react-icons/im";
import { headerStyle } from '../../styles/header-style';
import { useState } from 'react';
import { BiLogInCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Header = () => {
  const [tanValue, setTabValue] = useState(0);
  return (
    <AppBar sx={headerStyle.appBar}>
        <Toolbar>
            {/*@ts-ignore*/}
            <ImBlogger size={"18px"} style={{ borderRadius: "50%", padding: "10px", background: "#6c5252" }} />
            <Box sx={headerStyle.tabContainer}>
                <Tabs textColor='inherit' indicatorColor='primary' value={tanValue} onChange={(e, val)=> setTabValue(val)}>
                    {/*@ts-ignore*/}
                    <Tab LinkComponent={Link} to='/' label="Home" />
                    {/*@ts-ignore*/}
                    <Tab LinkComponent={Link} to='/blogs'  label="Blogs" />
                </Tabs>
                {/*@ts-ignore*/}
                <Link to='/auth'>
                  {/*@ts-ignore*/}
                  <Button endIcon={<BiLogInCircle />} sx={{ ...headerStyle.authBtn }}>Auth</Button>
                </Link>
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header
