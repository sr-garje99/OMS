import { TextField, FormControlLabel, Checkbox, Button, Box, Alert, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card ,Form,InputGroup} from 'react-bootstrap';
import { toast } from 'react-toastify';
import axios from 'axios';

const UserSignup = () => {
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
		var check = /^\d+$/
		if(!check.test(data.mob_no))
		{
			toast.error('mobile number is invalid !');
			return;
		}
		if (data.mob_no.length != 10) {
			toast.error('mobile number is invalid !');
			return;
		}
		if (data.password.length < 8) {
			toast.error('password must be atleast 8 characters !');
			return;
		}
		console.log(data);
		axios
			.post('http://localhost:8000/api/users/', data)
			.then((response) => {
				console.log(response.data);
				toast.success('User registered successfully !!');
				navigate('/login');
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
		<div>
			<div>
			<Card.Img
										img-fluid
										style={{ maxWidth: ' 20rem', maxHeight: '12rem', margin: ' 0.5rem',float:'left',height: '60vh',width:'60vh' }}
										variant="top"
										src={'./images/Persistent.jpg'}
									/>
			</div>
		<Card style={{ width: '25rem',align:'centre',padding:'5%',margin:'1%',float:'right' }}>
          
			<div>
				<div>
                   <h2 className="text-center mb-4">Admin SignUP !</h2>   
          <h6>User Name :</h6>
					<input
						type="text"
						className="form-control form-control-lg"
						placeholder="Enter User Name"
						id="name"
						value={data.name}
						onChange={(e) => handleChange(e, 'name')}
                        invalid ={ error.errors?.response?.data.name ? true : false}
					/>
                  
				</div>
				<br />
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
				<div className="form-group">
					<h6>Mobile Number :</h6>
					<input
						type="text"
						className="form-control form-control-lg"
						placeholder="Enter Mobile Number"
						id="mob_no"
						value={data.mob_no}
						onChange={(e) => handleChange(e, 'mob_no')}
					/>
				</div>
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
				<div className="form-group">
					<h6>Address :</h6>
					<input
						type="text"
						className="form-control form-control-lg"
						placeholder="Enter Address"
						id="address"
						value={data.address}
						onChange={(e) => handleChange(e, 'address')}
					/>
				</div>
				<br />
				<button className="btn btn-primary btn-block" onClick={handleSubmit}>
					Join
				</button>
			</div>
		</Card>
		</div>
	);
};

export default UserSignup;
