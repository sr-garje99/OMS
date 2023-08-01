import { TextField, FormControlLabel, Checkbox, Button, Box, Alert, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Form, InputGroup } from 'react-bootstrap';
import { toast } from 'react-toastify';
import axios from 'axios';

const UserLogin = () => {
	let navigate = useNavigate();
	const [ validated, setValidated ] = useState(false);
	const [ data, setData ] = useState({
		name: '',
		email: '',
		password: '',
		mob_no: '',
		address: ''
	});

	const [ error, setError ] = useState({
		errors: {},
		isError: false
	});
	// useEffect(
	// 	() => {
	// 		console.log(data);
	// 	},
	// 	[ data ]
	// );
	const handleChange = (event, field) => {
		setData({ ...data, [field]: event.target.value });
	};
	const handleSubmit = (e) => {
		const form = e.currentTarget;
		if (form.checkValidity() === false) {
			e.preventDefault();
			e.stopPropagation();
		}

		setValidated(true);
		// if (response.data.mob_no.length != 10) {
		// 	toast.error('mobile number is invalid !');
		// 	return;
		// }
		console.log(data);
		if (data.password.length < 8) {
			toast.error('password must be atleast 8 characters !');
			return;
		}
		axios
			.post('http://localhost:8000/api/users/login', data)
			.then((response) => {
				console.log(response.data);
				if (response.data.error) {
					toast.error('form data is invalid !');
					return;
				}
				toast.success('User login successfull!!');
				navigate(`/dashboard/${response.data.userId}`);
			})
			.catch((error) => {
				console.log(error);
				setError({
					errors: error,
					isError: true
				});
			});
	};

	return (
		<Card style={{ width: '25rem', align: 'centre', padding: '3%', margin: '1%' }}>
			<div>
				<div className="form-group">
					<h6>Email:</h6>
					<input
						type="email"
						className="form-control form-control-lg"
						placeholder="Enter email address"
						id="email"
						value={data.email}
						onChange={(e) => handleChange(e, 'email')}
					/>
				</div>
				<br />

				<br />
				<div className="form-group">
					<h6>Password :</h6>
					<input
						type="password"
						className="form-control form-control-lg"
						placeholder="Enter Password"
						id="password"
						value={data.password}
						onChange={(e) => handleChange(e, 'password')}
					/>
				</div>
				<br />

				<button className="btn btn-primary btn-block" onClick={handleSubmit}>
					Log in
				</button>
			</div>
		</Card>
	);
};

export default UserLogin;
