import {  Button,CssBaseline, Grid, Typography } from '@mui/material';
import { Form} from "react-bootstrap";
import {Card,Table} from 'react-bootstrap';
import Navbar from '../components/Navbar';
import { Copyright } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import ShowOrders from '../components/ShowOrders';
import { useParams } from 'react-router-dom';
import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Daashboard = () => {
   
  const { id } = useParams();
  const [ user, setUser ] = useState([]);
  const [ order, setOrder ] = useState([]);

  const fetchUser = async () => {
		const result = await axios.get('http://localhost:8000/api/orders/');
		const presult = await axios.get(`http://localhost:8000/api/users/${id}`);
		console.log(result.data);
		setOrder(result.data);
		setUser(presult.data);
		console.log(user);

		//console.log(Id);
	};
   const handleLogout = () => {
    
  //   navigate('/login')
   }
  const [active, setActive] = useState("")
  const [flag, setFlag] = useState("")
  const handlehome = () => {

 

    navigate('/')

  }
  const navigate = useNavigate()
  //const dispatch = useDispatch()
  // const { access_token } = getToken()
  // const { data, isSuccess } = useGetLoggedUserQuery(access_token)

  const [userData, setUserData] = useState({
    email: "",
    name: ""
  })

  // Store User Data in Local State
  useEffect(() => {
    if (true) {
      setUserData({
        email: user.email,
        name: user.name,
      })
    }
  })

  // Store User Data in Redux Store
  // useEffect(() => {
  //   if (data && isSuccess) {
  //     dispatch(setUserInfo({
  //       email: data.email,
  //       name: data.name
  //     }))
  //   }
  // }, [data, isSuccess, dispatch])
  //let navigate = useNavigate();

	const [ order_id, setOrderId ] = useState(null);

	const TrackOrder = async () => {
		let formField = new FormData();

		formField.append('order_id', order_id);
		/*try {
			await axios({
				method: 'post',
				url: 'http://localhost:8000/api/order/',
				data: formField
			}).then((response) => {
				console.log(response.data);
				navigate('/addOrder');
			});
		} catch (error) {
			console.log(error);
		}*/
		navigate(`/orders/${order_id}`);
	};
  

  return <>
    <Navbar/>
    <CssBaseline />
    <Card style={{margin:"1rem"}}>
      <h2 style={{color:'rgb(252, 103, 49)'}}className="text-center mb-4">Search Order</h2>
  <div style={{margin:'0.5rem'}}>
  <Form className="d-flex">
                  <Form.Control
                    type="search"
                    className='form-control form-control-lg'
                    placeholder="Enter Order Id :"
                    name="order_id"
                    value={order_id}
                    onChange={(e) => setOrderId(e.target.value)}
                  />
                  <button style={{margin:'1px'}}className="btn btn-outline-primary mr-2" onClick={TrackOrder}>
							Search
						</button>
                </Form>
                </div>
      </Card>
    <Grid container>
      <Grid item sm={4} sx={{ backgroundColor: '#FFF5EE', p: 5, color: 'rgb(252, 103, 49)' }}>
        <h1>Dashboard</h1>
        <Typography variant='h5'>Email: {userData.email}</Typography>
        <Typography variant='h6'>Name: {userData.name}</Typography>
        
                <br/>
                {/* <button style={{ margin: '4px' }}className="btn btn-outline-primary mr-2" onClick={handleLogout} sx={{ mt: 8 }}>Logout</button> */}
                <br/><br/>
              
                    <Button style={{ margin: '4px' }}variant='contained' color='warning' size='large' margin='2px' onClick={() => setActive("True")} sx={{ mt: 8 }}>Change Password</Button>
    
                
      </Grid>
      <Card className="m-3 rounded shadow-lg main-order-show" style={{ width: '22rem' }}>
										<div className="full-order-detail">
											<Card.Body>
												<Card.Title>Manage orders</Card.Title>
                        <hr/>
												<Card.Text> update or delete orders from database</Card.Text>
                        <Button float='center'variant='contained' color='warning' size='large' onClick={() => setFlag("True")} sx={{ mt: 8 }}>Manage Orders</Button>
        
											</Card.Body>
        
										</div>
        
									</Card>
                   <Card className="m-3 rounded shadow-lg main-order-show" style={{ width: '22rem' }}>
										<div className="full-order-detail">
											<Card.Body>
												<Card.Title>Add Product</Card.Title>
												<Card.Text> add new Product</Card.Text>
                        
                          <Link className="btn btn-outline-primary mr-2" to={`/addproduct`}>
                              Add Product
                          </Link>
                          <hr/>
                          <Card.Title>Add Products</Card.Title>
												<Card.Text> through CSV file</Card.Text>
                        <Link style={{width:'',height:'inherit',float:'centre'}}className="btn btn-outline-primary mr-2" to={`/addProductCsv`}>
									Add Products
								</Link>
  
											</Card.Body>

										</div>
									</Card>

    
      {active === "True" &&  <Grid item sm={8}>
        <Card className="m-3 rounded shadow-lg main-order-show" style={{ width: '100%' }}>
										<div className="full-order-detail">
			
        {/* <ChangePassword /> */}
        </div>
        </Card>
      </Grid>}
    
    </Grid>
      
        <Grid container justifyContent='center'>
      <Grid item sm={10}>
     
        
        {flag === "True" &&  <div>
                                         <h1>Orders</h1>
                                           <hr />
                                        <div className="full-order-detail">
                                          <ShowOrders/>
                                        </div>
          </div>                          
                                
        }
    
        
        
      </Grid>
    </Grid>
    
  
  </>;
};

export default Daashboard;
