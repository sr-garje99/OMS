

import SingleProduct from '../components/SingleProduct';
import Product from '../pages/Product';
import ShowProduct from '../components/ShowProduct'
import { Row,Col,Card,Form,Button,Carousel,Tabs,Tab} from "react-bootstrap";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import {React,useState } from 'react';
import axios from 'axios';

const id= 1; 





const Home = () => {
  let navigate = useNavigate();

	const [ order_id, setOrderId ] = useState(null);
  const [mob_no , setMobNo] = useState(null);

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
  const TrackOrderByMob = async () => {
		
		navigate(`/orders/mbn/${mob_no}`);
	};

  
  return (
   
    <div>
      <Card style={{margin:"1rem",padding:"0.5rem"}}>
        <h2 style={{color:'rgb(252, 103, 49)'}}className="text-center mb-4">Track Order</h2>
    <Tabs
     defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
            
      <Tab eventKey="profile" title="By Mobile Number"
      style={{margin:"0.5rem",padding:"0.5rem"}}
      >
           
      
    
  <div >
  <Form className="d-flex">
                  <Form.Control
                    type="search"
                    className='form-control form-control-lg'
                    placeholder="Enter Mobile Number :"
                    name="mob_no"
                    value={mob_no}
                    onChange={(e) => setMobNo(e.target.value)}
                  />
                  <button style={{ margin: '1px' }}className="btn btn-outline-primary mr-2" onClick={TrackOrderByMob}>
							Track
						</button>
                </Form>
                </div>
      
    
      </Tab>
      <Tab eventKey="home" title="By Order Id"
      style={{margin:"0.5rem",padding:"0.5rem"}}
      >
       

    
  <div >
  <Form className="d-flex">

                  <Form.Control
                    type="search"
                    className='form-control form-control-lg'
                    placeholder="Enter Order Id :"
                    name="order_id"
                    value={order_id}
                    onChange={(e) => setOrderId(e.target.value)}
                  />
                  <button style={{ margin: '1px' }}className="btn btn-outline-primary mr-2" onClick={TrackOrder}>
							Track
						</button>
                </Form>
                </div>
      
      </Tab>
      
    </Tabs >
    </Card>
              <Card>
                <Carousel style={{width:"30rem",height:"30rem",margin:"1rem",padding:"0.5rem"}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.vecteezy.com/system/resources/previews/000/482/210/original/vector-logistics-isometric-infographics.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.creativemarket.com/0.1.0/ps/10077495/3640/2410/m1/fpnw/wm1/delivery_logistics_3-.jpg?1616484725&s=74e4af1808c40730c4a1e48a49bd34e7"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.matthews.com.au/upload/images/topchallengesimg1.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            {/* <Row>
                  <ShowProduct/>
            </Row>
            */}
        </Card>
    </div>

    
  )
};
const showProduct = (product) =>  {
  return <>
  
            <Col>
              <SingleProduct product= {product}/>
            </Col>
          </>
}

export default Home;