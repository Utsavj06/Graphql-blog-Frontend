import { AppBar, Box, Button, IconButton, Menu, MenuItem, Tab, Tabs, Toolbar } from '@mui/material';
import { ImBlogger } from 'react-icons/im';
import { headerStyle } from '../../styles/header-style';
import { useState } from 'react';
import { BiLogInCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store/auth-slice';

const Header = () => {
  const [tanValue, setTabValue] = useState(0); const isLoggedIn = useSelector(((state: any) => state.isLoggedIn));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch()

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(authActions.logout());
  }

  return (
    <AppBar sx={headerStyle.appBar}>
      <Toolbar>
        {/*@ts-ignore*/}
        <ImBlogger size={"18px"} style={{ borderRadius: "50%", padding: "10px", background: "#6c5252" }} />
        <Box sx={headerStyle.tabContainer}>
          <Tabs textColor='inherit' indicatorColor='primary' value={tanValue} onChange={(e, val) => setTabValue(val)}>
            {/*@ts-ignore*/}
            <Tab LinkComponent={Link} to='/' label="Home" />
            {/*@ts-ignore*/}
            <Tab LinkComponent={Link} to='/blogs' label="Blogs" />
          </Tabs>
          {/*@ts-ignore*/}
          {!isLoggedIn ?
            <Link to="/auth">
              {/*@ts-ignore */}
              <Button endIcon={<BiLogInCircle />}
                sx={{ ...headerStyle.authBtn }}
              >
                Auth
              </Button>
            </Link>
            :
            <>
              <IconButton
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                {/* @ts-ignore */}
                <CgProfile />
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                  list: {
                    'aria-labelledby': 'basic-button',
                  },
                }}
              >
                {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem> */}
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          }
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header;