import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

var Id;

const PlaceOrder = () => {
	let navigate = useNavigate();

	const { id } = useParams();

	const [ order, setOrder ] = useState([]);
	const [ show, setShow ] = useState(false);
	//const [ product, setProduct ] = useState([]);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const fetchOrder = async () => {
		const result = await axios.get('http://localhost:8000/api/order-list');
		//const presult = await axios.get(`http://localhost:8000/api/product-detail/${id}`);

		//console.log(result.data);
		setOrder(result.data);
		//setProduct(presult.data);
		//console.log(product.data);

		//console.log(Id);
	};

	useEffect(() => {
		fetchOrder();
	}, []);

	const [ user_name, setUserName ] = useState(1);
	const [ order_status, setOrderStatus ] = useState('placed');
	const [ address, setAddress ] = useState(null);
	const [ mob_no, setMobileNo ] = useState(null);
	const [ quantity, setQuantity ] = useState(1);
	const [ product_id, setProductId ] = useState(1);
	const [ order_cost, setOrderCost ] = useState(1);

	const addNewOrder = async () => {
		let formField = new FormData();
		formField.append('user_name', user_name);
		formField.append('order_status', order_status);
		formField.append('address', address);
		formField.append('mob_no', mob_no);
		formField.append('quantity', quantity);
		formField.append('product_id', product_id);
		formField.append('order_cost', order_cost);
		console.log(formField);
		try {
			axios({
				method: 'post',
				url: 'http://localhost:8000/api/order-create/',
				data: formField
			}).then((response) => {
				//console.log(response.data);
				//console.log(Id);
			});
		} catch (error) {
			console.log(error);
		}
		const result = await axios.get('http://localhost:8000/api/order-list/');
		Id = result.data[result.data.length - 1].id;
		//console.log(Id);
		navigate(`/orders/${Id}`);
		handleClose();
	};

	return (
		<div className="container">
			<div className="container">
				<div className="w-75 mx-auto shadow p-5">
					<h2 className="text-center mb-4">Place Order</h2>
					<hr />

					{/*<div className="form-group">
						<h6>User email :</h6>
						<input
							type="text"
							className="form-control form-control-lg"
							placeholder="Enter User email address"
							user_name="user_name"
							value={user_name}
							onChange={(e) => setUserName(e.target.value)}
						/>
	</div>*/}
					<br />
					<div className="form-group">
						<h6>Order Status :</h6>
						<input
							type="text"
							className="form-control form-control-lg"
							placeholder="Enter Order Status"
							name="order_status"
							value={'in progress ...'}
							onChange={(e) => setOrderStatus('placed')}
						/>
					</div>
					<br />
					<div className="form-group">
						<h6>Address :</h6>
						<input
							type="text"
							className="form-control form-control-lg"
							placeholder="Enter Address "
							address="address"
							value={address}
							onChange={(e) => setAddress(e.target.value)}
						/>
					</div>
					<br />
					<div className="form-group">
						<h6>Mobile Number :</h6>
						<input
							type="text"
							className="form-control form-control-lg"
							placeholder="Enter Mobile Number "
							mob_no="mob_no"
							value={mob_no}
							onChange={(e) => setMobileNo(e.target.value)}
						/>
					</div>
					<br />

					<div className="form-group">
						<h6>Quantity :</h6>
						<input
							type="number"
							className="form-control form-control-lg"
							placeholder="Enter Quantity"
							name="quantity"
							value={quantity}
							onChange={(e) => setQuantity(e.target.value)}
						/>
					</div>
					<br />
					<div className="form-group">
						<h6>Product name :</h6>
						<input
							type="text"
							className="form-control form-control-lg"
							placeholder="Enter Product  :"
							name="product_id"
							value={product_id}
							onChange={(e) => setProductId(e.target.value)}
						/>
					</div>
					<br />
					<div className="form-group">
						<h6>Price :</h6>
						<input
							type="text"
							className="form-control form-control-lg"
							placeholder="Enter Order cost"
							name="order_cost"
							value={order_cost}
							//order_cost={product.price * quantity}
							onChange={(e) => setOrderCost(e.target.value)}
						/>
					</div>
					<br />
					<hr />
					<button className="btn btn-primary btn-block" onClick={handleShow}>
						Place
					</button>
					<Modal style={{ margin: '100px' }} show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>Placed</Modal.Title>
						</Modal.Header>
						<Modal.Body>Your Order is placed !!</Modal.Body>
						<Modal.Footer>
							<Button variant="primary" onClick={addNewOrder}>
								Ok
							</Button>
						</Modal.Footer>
					</Modal>
				</div>
			</div>
		</div>
	);
};

export default PlaceOrder;
