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

	useEffect(() => {
		loadOrders();
	}, []);

	let loadOrders = async () => {
		console.log({ id });
		const result = await axios.get(`http://127.0.0.1:8000/api/orders/${id}`);
		//console.log(result.data.user_name);

		data.address = result.data.address;
		data.mob_no = result.data.mobno.toString();
		data.order_cost = result.data.order_cost.toString();
	};

	// Update s single order by id

	const updateSingleOrder = async () => {
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
