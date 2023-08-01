import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Card, Row, Col, Container } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const OrderDetail = () => {
	const [ order, setOrder ] = useState([]);
	const [ product, setProduct ] = useState([]);
	const navigate = useNavigate();
	const { id } = useParams();

	const [ show, setShow ] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	//console.log(product.name);

	useEffect(() => {
		getSingleOrder();
		//getSingleProduct();
	}, []);

	const getSingleOrder = async () => {
		const result = await axios.get(`http://127.0.0.1:8000/api/orders/${id}`);
		setOrder(result.data);
		const ID = result.data.product_id;
		console.log(ID);
		//const presult = axios.get(`http://127.0.0.1:8000/api/product-detail/${ID}/`);
		//setProduct(presult.data);
		//console.log(presult.data.name);
		getSingleProduct(ID);
	};
	const getSingleProduct = async (ID) => {
		//const ID = order.product_id;
		const presult = axios.get(`http://127.0.0.1:8000/api/products/${ID}/`);
		setProduct(presult.data);
		console.log(presult.data);

		setProduct(presult.data);
		console.log(product.name);
	};
	const deleteOrder = async (id) => {
		await axios.delete(`http://127.0.0.1:8000/api/orders/${order.orderId}`);
		navigate('/');
		/*	var newOrder = order.filter((item) => {
			// console.log(item);
			return item.id !== id;
		});*/
		//setOrder(newOrder);
	};

	return (
		<div style={{ alignContent: 'center' }}>
			<h2 style={{ alignItems: 'center' }}>Order Details </h2>
			<hr />

			{/*{order.map((order, index) => (*/}
			<Card className="m-3 rounded shadow-lg main-order-show" style={{ width: '22rem' }}>
				<Card.Body>
					<Card.Title>Order Id :{order.orderId}</Card.Title>
					<Card.Text> Price:&#8377;{order.order_cost} </Card.Text>
					{/* <Card.Text> Quantity: {order.quantity} </Card.Text> */}
					{/*<Card.Text>Product name: {product.name} </Card.Text>*/}
					{/*<Card.Text> user_id: {order.user_name} </Card.Text>*/}
					<Card.Text>address: {order.address} </Card.Text>
					<Card.Text>Mob. No : {order.mobno} </Card.Text>
					<Card.Text> status: {order.order_status} </Card.Text>
					<Button classname="btn btn-outline-primary mr-2" onClick={handleShow}>
						Delete
					</Button>
					<Modal style={{ margin: '100px' }} show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>Delete</Modal.Title>
						</Modal.Header>
						<Modal.Body>Are you Sure you want to delete ?</Modal.Body>
						<Modal.Footer>
							<Button variant="secondary" onClick={handleClose}>
								Close
							</Button>
							<Button variant="primary" onClick={() => deleteOrder(order.id)}>
								Delete
							</Button>
						</Modal.Footer>
					</Modal>
				</Card.Body>
			</Card>
			{/*))}*/}
		</div>
	);
};

export default OrderDetail;

//<div className="full-order-detail"><div className="main-product-show">
