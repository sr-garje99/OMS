import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
const AddProductCsv = () => {
	let navigate = useNavigate();

	const [ stock, setStock ] = useState(null);
	const [ file, setFile ] = useState(null);
	const [ price, setPrice ] = useState(null);
	const [ availability, setAvailability ] = useState(null);
	const [ name, setName ] = useState(null);
	const [ description, setDescription ] = useState(null);
	const [ show, setShow ] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const addNewProduct = async () => {
		let formField = new FormData();
		//formField.append('stock', stock);
		// formField.append('price', price);
		// formField.append('availability', availability);
		// formField.append('name', name);
		// formField.append('description', description);

		if (file !== null) {
			formField.append('file', file);
		}

		await axios({
			method: 'post',
			url: 'http://localhost:8000/upload-csv/',
			data: formField
		}).then((response) => {
			console.log(response.data);
			navigate('/');
		});
	};

	return (
		<div className="container">
			<div className="container">
				<div className="w-75 mx-auto shadow p-5">
					<h2 className="text-center mb-4">Add CSV file</h2>
					<hr />
					<h6>Select file :</h6>
					<div className="form-group">
						<input type="file" className="form-control" onChange={(e) => setFile(e.target.files[0])} />
					</div>
					<br />
					<button className="btn btn-primary btn-block" onClick={handleShow}>
						upload
					</button>
					<Modal style={{ margin: '100px' }} show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>Placed</Modal.Title>
						</Modal.Header>
						<Modal.Body> file uploaded sucessfully !!</Modal.Body>
						<Modal.Footer>
							<Button variant="primary" onClick={addNewProduct}>
								Ok
							</Button>
						</Modal.Footer>
					</Modal>
				</div>
			</div>
		</div>
	);
};
export default AddProductCsv;
