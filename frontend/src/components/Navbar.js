import { AppBar, Box, Toolbar, Typography, Button,Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { getToken } from '../services/LocalStorageService';
import Pic from '../images/Persistent.png'
const Navbar = () => {
  const { access_token } = getToken()
  return <>
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="fixed" color="warning">
        <Toolbar>
         {/* <img style={{margin:'1px',height:''}} src = {Pic} />*/}

          <Button component={NavLink} to='/' style={({ isActive }) => { return { backgroundColor: isActive ? 'rgb(255, ,255)' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>&#8810;</Button>

          <Typography variant='h5' component="div" sx={{ flexGrow: 1 }}>Order Management</Typography>
          
          <Button component={NavLink} to='/' style={({ isActive }) => { return { backgroundColor: isActive ? 'rgb(255, ,255)' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Home</Button>

          {/*<Button component={NavLink} to='/orders' style={({ isActive }) => { return { backgroundColor: isActive ? 'rgb(255, ,255)' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Orders</Button>

<Button component={NavLink} to='/contact' style={({ isActive }) => { return { backgroundColor: isActive ? 'rgb(252, 103, 49)' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Contact</Button>*/}

         {access_token ? <Button component={NavLink} to='/dashboard' style={({ isActive }) => { return { backgroundColor: isActive ? 'rgb(252, 103, 49)' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Dashboard</Button> : <Button component={NavLink} to='/login' style={({ isActive }) => { return { backgroundColor: isActive ? 'warning' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Admin</Button>}



        </Toolbar>
      </AppBar>
    </Box>
  </>;
};

export default Navbar;
