import { React, useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddOrder = () => {
	let navigate = useNavigate();
	const [ data, setData ] = useState({
		order_status: 'placed',
		order_cost: '',
		mobno: '',
		address: ''
	});

	const handleChange = (event, field) => {
		setData({ ...data, [field]: event.target.value });
	};

	const addNewOrder = async () => {
		let formField = new FormData();

		try {
			axios
				.post('http://localhost:8000/api/orders/', data)
				.then((response) => {
					console.log(response.data);
					toast.success('order placed successfully !!');
				})
				.then((response) => {
					console.log(response.data);
					navigate('/orders');
				});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="container">
			<div className="container">
				<div className="w-75 mx-auto shadow p-5">
					<h2 className="text-center mb-4">Add Order</h2>
					<hr />

					<div className="form-group">
						<h6>price:</h6>
						<input
							type="email"
							className="form-control form-control-lg"
							placeholder="Enter price "
							id="price"
							value={data.order_cost}
							onChange={(e) => handleChange(e, 'order_cost')}
						/>
					</div>
					<br />
					<div className="form-group">
						<h6>address:</h6>
						<input
							type="address"
							className="form-control form-control-lg"
							placeholder="Enter address"
							id="address"
							value={data.address}
							onChange={(e) => handleChange(e, 'address')}
						/>
					</div>
					<br />

					<br />
					<div className="form-group">
						<h6>Mobile Number :</h6>
						<input
							type="text"
							className="form-control form-control-lg"
							placeholder="Enter Mobile Number"
							id="mob_no"
							value={data.mobno}
							onChange={(e) => handleChange(e, 'mob_no')}
						/>
					</div>

					<hr />
					<button className="btn btn-primary btn-block" onClick={addNewOrder}>
						Add Order
					</button>
				</div>
			</div>
		</div>
	);
};

export default AddOrder;
