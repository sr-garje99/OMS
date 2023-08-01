import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { useParams, useNavigate } from 'react-router';

var ID = 'null';

const ShowOrders = () => {
	const [ Id, setId ] = useState(null);
	const [ order, setOrder ] = useState([]);
	const navigate = useNavigate();
	const [ show, setShow ] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const buttonRef = useRef(null);

	/*const deleteId = async (id) => {
		deleteOrder(order.id);
	};*/
	const fetchOrder = async () => {
		const result = await axios.get('http://localhost:8000/api/orders/');

		console.log(result.data);
		setOrder(result.data);
		console.log(result.data.id);
	};

	useEffect(() => {
		fetchOrder();
	}, []);

	const goToDetail = () => {
		alert('detail page');
	};
	const deleteOrder = async (id) => {
		await axios.delete(`http://127.0.0.1:8000/api/orders/${id}/`);
		console.log(id);
		navigate('/orders');
		setShow(false);
		/*	var newOrder = order.filter((item) => {
			// console.log(item);
			return item.id !== id;
		});*/
		//setOrder(newOrder);
	};
	const disableBtnProps = {};
	const handleUpdate = (id, order_status) => {
		if (order_status == 'shipped' || order_status == 'placed') {
			disableBtnProps.disabled = false;

			navigate(`/orders/${id}/update`);
		} else {
			disableBtnProps.disabled = true;
			disableBtnProps.className = 'btn btn-primary disabled';
			//disableBtnProps.style = { background-color: 'grey' };
			disableBtnProps.visible = false;
			navigate(`/orders/${id}`);
			buttonRef.current.Text = 'detail';
		}
	};

	return (
		<div>
			<div className="main-order-show">
				<Container fluid>
					<Row xs="auto">
						{order.map((order, index) => (
							<Col md={4} lg={4} sm={4} xs={12} key={index}>
								<Card className="m-2 rounded shadow-lg main-order-show" style={{ width: '18rem' }}>
									<Card.Body>
										<Card.Title>Order Id : {order.orderId}</Card.Title>
										<Card.Text> Price:&#8377; {order.order_cost} </Card.Text>
										{/*<Card.Text> quantity : {order.quantity} </Card.Text> */}
										{/* <Card.Text>product id : {order.product.name} </Card.Text> */}
										<Card.Text> status : {order.order_status} </Card.Text>
										<Card.Text> mob no : {order.mobno} </Card.Text>
										<Card.Text> address : {order.address} </Card.Text>

										<button
											{...disableBtnProps}
											ref={buttonRef}
											className="btn btn-outline-primary mr-2"
											onClick={() => handleUpdate(order.orderId, order.order_status)}
										>
											Update
										</button>
									</Card.Body>
								</Card>
							</Col>
						))}
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default ShowOrders;
