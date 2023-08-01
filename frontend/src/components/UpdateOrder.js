import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router';

const UpdateOrder = () => {
	const { id } = useParams();

	let navigate = useNavigate();
	const [ data, setData ] = useState({
		name: '',
		order_status: '',
		quantity: '1',
		mobno: '',
		address: '',
		order_cost: '',
		productId: ''
	});
	const handleChange = (event, field) => {
		setData({ ...data, [field]: event.target.value });
	};

	const [ user_name, setUserName ] = useState(null);
	const [ order_status, setOrderStatus ] = useState(null);
	const [ address, setAddress ] = useState(null);
	const [ mob_no, setMobileNo ] = useState(null);
	const [ quantity, setQuantity ] = useState(null);
	const [ product_id, setProductId ] = useState(null);
	const [ order_cost, setOrderCost ] = useState(null);
	useEffect(() => {
		loadOrders();
	}, []);

	// load students by its is and show data to forms by value

	let loadOrders = async () => {
		console.log({ id });
		const result = await axios.get(`http://127.0.0.1:8000/api/orders/${id}`);
		//console.log(result.data.user_name);

		// setUserName(result.data.user_name);
		// setOrderStatus(result.data.order_status);
		// setAddress(result.data.user.address);
		// setMobileNo(result.data.mob_no);
		// setQuantity(result.data.quantity);
		// setProductId(result.data.product.productId);
		// setOrderCost(result.data.order_cost);
		//data = result.data;
		data.address = result.data.address;
		data.mob_no = result.data.mobno.toString();
		data.order_cost = result.data.order_cost.toString();
		//data.product = result.data.product;
		//data.order_cost = result.data.order_cost;
	};

	// Update s single order by id

	const updateSingleOrder = async () => {
		let formField = new FormData();

		formField.append('user_name', user_name);
		formField.append('order_status', order_status);
		formField.append('address', address);
		formField.append('mob_no', mob_no);
		formField.append('quantity', quantity);
		formField.append('product_id', product_id);
		formField.append('order_cost', order_cost);

		await axios({
			method: 'PUT',
			url: `http://127.0.0.1:8000/api/orders/${id}`,
			data: data
		}).then((response) => {
			console.log(response.data);
			navigate('/orders');
		});
		navigate('/orders');
	};

	return (
		<div className="container">
			<div className="w-75 mx-auto shadow p-5">
				<h2 className="text-center mb-4">Update A Order</h2>
				<hr />
				{/*<div className="form-group">
					<h6>User Name :</h6>
					<input
						type="text"
						className="form-control form-control-lg"
						placeholder="Enter user id"
						name="user_name"
						value={user_name}
						onChange={(e) => setUserName(e.target.value)}
	/>
				</div>*/}
				<br />
				{/*<div className="form-group">
					<h6>Order Status :</h6>
					<input
						type="text"
						className="form-control form-control-lg"
						placeholder="Enter Order Status"
						name="order_status"
						value={order_status}
						onChange={(e) => setOrderStatus(e.target.value)}
					/>
	</div>*/}
				<label for="OrderStatus">Choose status :</label>
				<select
					className="form-control form-control-lg"
					name="OrderStatus"
					value={data.order_status}
					onChange={(e) => handleChange(e, 'order_status')}
					//id="OrderStatus"
				>
					<option disabled value="placed">
						placed
					</option>
					<option value="shipped">shipped</option>
					<option value="delivered">delivered</option>
				</select>
				{/*<br />
				<div className="form-group">
					<h6>Address :</h6>
					<input
						readOnly
						type="text"
						className="form-control form-control-lg"
						placeholder="Enter Address "
						address="address"
						value={address}
						onChange={(e) => handleChange(e, 'address')}
					/>
				</div>
				<br />
				<div className="form-group">
					<h6>Mobile Number :</h6>
					<input
						readOnly
						type="text"
						className="form-control form-control-lg"
						placeholder="Enter Mobile Number "
						mob_no="mob_no"
						value={mob_no}
						onChange={(e) => handleChange(e, 'mob_no')}
					/>
				</div>
				 <br />
				<div className="form-group">
					<h6>Quantity</h6>
					<input
						readOnly
						type="number"
						className="form-control form-control-lg"
						placeholder="Enter Quantity"
						name="quantity"
						value={quantity}
						onChange={(e) => handleChange(e, 'quantity')}
					/>
				</div> */}
				<br />
				{/* <div className="form-group">
					<h6>Product id :</h6>
					<input
						readOnly
						type="text"
						className="form-control form-control-lg"
						placeholder="Enter Product Id :"
						name="product_id"
						value={product_id}
						onChange={(e) => handleChange(e, 'productId')}
					/>
				</div>
				<br />
				<div className="form-group">
					<h6>Price :</h6>
					<input
						readOnly
						type="text"
						className="form-control form-control-lg"
						placeholder="Enter Order cost"
						name="order_cost"
						value={order_cost}
						onChange={(e) => handleChange(e, 'order_cost')}
					/>
				</div> */}
				<br />
				<hr />
				<button onClick={updateSingleOrder} className="btn btn-primary btn-block">
					Update
				</button>
			</div>
		</div>
	);
};

export default UpdateOrder;
