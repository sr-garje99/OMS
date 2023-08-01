import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useRef } from 'react';
import { toast } from 'react-toastify';
var Id;

const PlaceOrder = () => {
	let navigate = useNavigate();

	const { id } = useParams();
	const [ data, setData ] = useState({
		order_status: 'placed',
		order_date: '',
		order_cost: '',
		quantity: '',
		mob_no: '',
		address: ''
	});
	const [ order, setOrder ] = useState([]);
	const [ show, setShow ] = useState(false);
	const [ product, setProduct ] = useState([]);
	const handleClose = () => setShow(false);
	const handleShow = () => {
		if (data.mob_no.length != 10) {
			toast.error('mobile number is invalid !');
			return;
		}
		setShow(true);
	};
	const handleProduct = () => {
		//setProductId(product.id);
		//setOrderCost(product.price * quantity);
		//setProductId(product.id);
	};

	const fetchOrder = async () => {
		const result = await axios.get('http://localhost:8000/api/orders/');
		//const presult = await axios.get(`http://localhost:8000/api/products/${id}`);
		console.log(result.data);
		setOrder(result.data);
		//setProduct(presult.data);
		//console.log(product);

		console.log(Id);
	};

	useEffect(() => {
		fetchOrder();
	}, []);

	const [ user_name, setUserName ] = useState(1);
	const [ order_status, setOrderStatus ] = useState('placed');
	const [ address, setAddress ] = useState(null);
	const [ mob_no, setMobileNo ] = useState(null);
	const [ quantity, setQuantity ] = useState(1);
	const [ product_id, setProductId ] = useState(null);
	const [ order_cost, setOrderCost ] = useState(null);
	const inputRef = useRef(null);
	const productRef = useRef(null);
	const handleCancel = () => {
		navigate('/');
	};
	const handleChange = (event, field) => {
		setData({ ...data, [field]: event.target.value });
	};
	const addNewOrder = async () => {
		console.log(inputRef.current.value);
		setProductId(product.id);
		//setOrderCost(product.price * quantity);

		let formField = new FormData();
		formField.append('user_name', user_name);
		formField.append('order_status', order_status);
		formField.append('address', address);
		formField.append('mob_no', mob_no);
		formField.append('quantity', quantity);
		formField.append('product_id', product.id);
		formField.append('order_cost', inputRef.current.value);
		data.order_cost = product.price;
		data.quantity = formField.quantity;

		try {
			await axios({
				method: 'post',
				url: `http://localhost:8000/api/orders/product/${id}`,
				data: data
			}).then((response) => {
				console.log(response.data);

				console.log(Id);
			});
		} catch (error) {
			console.log(error);
		}
		const result = await axios.get('http://localhost:8000/api/orders/');
		Id = result.data[result.data.length - 1].orderId;
		console.log(Id);
		navigate(`/orders/${Id}`);
		handleClose();
	};
	//  handleProduct = (e) => {
	//  	this.setState({value: e.target.value});
	//  };

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
							value={'in progress...'}
							// onChange={(e) => setOrderStatus('placed')}
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
							value={data.address}
							onChange={(e) => handleChange(e, 'address')}
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
							value={data.mob_no}
							onChange={(e) => handleChange(e, 'mob_no')}
						/>
					</div>
					{/* <br />

					<div className="form-group">
						<h6>Quantity :</h6>
						<input
							type="number"
							min="1"
							className="form-control form-control-lg"
							placeholder="Enter Quantity"
							name="quantity"
							value={quantity}
							onChange={(e) => setQuantity(e.target.value)}
							//onChange={(e) => handleChange(e.target.value, 'quantity')}
						/>
					</div> */}
					<br />
					<div className="form-group">
						<h6>Product name :</h6>
						<input
							type="text"
							className="form-control form-control-lg"
							placeholder="Enter Product name :"
							name="product_id"
							//value={product_id}
							value={product.name}
							//onInput={(e) => setProductId(product.id)}
							ref={productRef}
							//onChange={() => handleProduct()}
						/>
					</div>
					<br />
					<div className="form-group">
						<h6>Price :</h6>
						<input
							type="number"
							className="form-control form-control-lg"
							placeholder="Enter Order cost"
							name="order_cost"
							//value={order_cost}
							value={product.price}
							onChange={(e) => setOrderCost(e.target.value)}
							ref={inputRef}
							//onChange={(e) => handleChange(e, 'order_cost')}
						/>
					</div>
					<br />
					<hr />

					<button className="btn btn-outline-primary mr-2" onClick={handleShow}>
						Place
					</button>
					<Button style={{ margin: '4px' }} className="btn btn-primary btn-block" onClick={handleCancel}>
						Cancel
					</Button>

					<Modal style={{ margin: '100px' }} show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>Placed</Modal.Title>
						</Modal.Header>
						<Modal.Body>{order.id} Your Order is placed !!</Modal.Body>
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
