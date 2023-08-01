import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';

const UpdateProduct = () => {
	let navigate = useNavigate();

	const [ data, setData ] = useState({
		name: '',
		stock: '',
		image: '',
		price: '',
		availability: '',
		description: ''
	});
	const handleChange = (event, field) => {
		setData({ ...data, [field]: event.target.value });
	};

	const addNewProduct = async () => {
		axios.post('http://localhost:8000/api/products/', data).then((response) => {
			console.log(response.data);
			navigate('/');
		});
	};

	return (
		<div className="container">
			<div className="container">
				<div className="w-75 mx-auto shadow p-5">
					<h2 className="text-center mb-4">Add Product</h2>
					<hr />
					<h6>Select image :</h6>
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							id="image"
							value={data.name}
							onChange={(e) => handleChange(e, 'image')}
						/>
					</div>
					<br />
					<div className="form-group">
						<h6>Product Name :</h6>
						<input
							type="text"
							className="form-control form-control-lg"
							placeholder="Enter Product Name"
							id="name"
							value={data.name}
							onChange={(e) => handleChange(e, 'name')}
						/>
					</div>
					<br />
					<div className="form-group">
						<h6>Stock :</h6>
						<input
							type="number"
							className="form-control form-control-lg"
							placeholder="Enter Product Stock"
							id="stock"
							value={data.stock}
							onChange={(e) => handleChange(e, 'stock')}
						/>
					</div>
					<br />
					<div className="form-group">
						<h6>Availability :</h6>
						<input
							type="text"
							className="form-control form-control-lg"
							placeholder="Enter Availability"
							id="availability"
							value={data.availability}
							onChange={(e) => handleChange(e, 'availability')}
						/>
					</div>
					<br />
					<div className="form-group">
						<h6>Description :</h6>
						<input
							type="text"
							className="form-control form-control-lg"
							placeholder="Enter Product description"
							id="description"
							value={data.description}
							onChange={(e) => handleChange(e, 'description')}
						/>
					</div>
					<br />
					<div className="form-group">
						<h6>Price :</h6>
						<input
							type="number"
							className="form-control form-control-lg"
							placeholder="Enter Price"
							name="price"
							value={data.price}
							onChange={(e) => handleChange(e, 'price')}
						/>
					</div>
					<br />
					<button className="btn btn-primary btn-block" onClick={addNewProduct}>
						Add Product
					</button>
				</div>
			</div>
		</div>
	);
};
export default UpdateProduct;
