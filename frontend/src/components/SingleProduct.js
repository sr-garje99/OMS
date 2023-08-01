import { NavLink, BrowserRouter as Router, Route, Switch, Navigate } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Card, Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function PlaceOrder() {}
function SingleProduct() {
	const [ product, setProduct ] = useState([]);
	const fetchProduct = async () => {
		const result = await axios.get('http://localhost:8000/api/products/');

		console.log(result.data);
		setProduct(result.data);
	};

	useEffect(() => {
		fetchProduct();
	}, []);

	const goToDetail = () => {
		alert('detail page');
	};
	return (
		<Card style={{ margin: ' 0.5rem' }}>
			<Card.Body>
				<Card.Img src={product.image} />
				<Card.Title>{product.name}</Card.Title>
				<Card.Text>{product.desc}</Card.Text>
				<h2>${product.price}</h2>
				<Link className="btn btn-outline-primary" to={`/order`}>
					Place Order
				</Link>
				<Button className="btn btn-outline-primary mr-2" onClick={PlaceOrder}>
					Place
				</Button>
			</Card.Body>
		</Card>
	);
}
export default SingleProduct;
