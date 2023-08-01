import { Grid, Card, Tabs, Typography, Tab, Box } from '@mui/material';
import { useState } from 'react';
import Pic1 from '../../images/PersistentLogo.gif'
import Registration from './Registration';
import UserLogin from './UserLogin';
import { ShoppingBag } from '@mui/icons-material';

const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div role='tabpanel' hidden={value !== index}>
      {
        value === index && (
          <Box>{children}</Box>
        )
      }
    </div>
  )
}
const LoginReg = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  return <>
    <Grid container sx={{ height: '60vh' }}>
      <Grid item lg={7} sm={5} sx={{
        backgroundImage: `url(${Pic1})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: { xs: 'none', sm: 'flex' }
      }}>
      </Grid>
      <Grid item lg={5} sm={7} xs={12}>
        <Card sx={{ width: '100%', height: '100%' }}>
          <Box sx={{ mx: 3, height: 530 }}>
            <Box sx={{ borderBottom: 1, borderColor: 'warning' }}>
              <Tabs value={value} textColor='warning' indicatorColor='warning' onChange={handleChange}>
                <Tab label='Login' sx={{ textTransform: 'none', fontWeight: 'bold' }}></Tab>
                {/* <Tab label='Registration' sx={{ textTransform: 'none', fontWeight: 'bold' }}></Tab> */}
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <UserLogin />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Registration />
            </TabPanel>
          </Box>
          <Box textAlign='center' sx={{ mt: 2 }}>
             <ShoppingBag sx={{ color: 'rgb(252, 103, 49)', fontSize: 100 }} /> 
            <Typography variant='h5' sx={{ fontWeight: 'bold' }}></Typography>
          </Box>
        </Card>
      </Grid>
    </Grid>
  </>;
};

export default LoginReg;
