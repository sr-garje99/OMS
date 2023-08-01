import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const products = [];

const ShowProduct = () => {
	const [ product, setProduct ] = useState([]);

	const fetchProduct = async () => {
		const result = await axios.get('http://localhost:8000/api/products/');

		console.log(result.data);
		setProduct(result.data);
		products = { product };
		console.log('hello');
		console.log(products);
		console.log('hello');
	};

	useEffect(() => {
		fetchProduct();
	}, []);

	const goToDetail = () => {
		alert('detail page');
	};
	//className="m-3 rounded shadow-lg main-product-show"
	//className="main-product-show"
	//style={{ margin: ' 0.5rem' }}
	return (
		<div className="main-product-show">
			<div className="m-3 rounded shadow-lg main-product-show">
				<Container fluid>
					<Row>
						{product.map((product, index) => (
							<Col md={4} lg={4} sm={4} xs={12} key={index}>
								<Card style={{ margin: ' 0.5rem' }}>
									<Card.Img
										img-fluid
										style={{ maxWidth: ' 20rem', maxHeight: '12rem', margin: ' 0.5rem' }}
										variant="top"
										src={'./images/zenbook.jpg'}
									/>

									<Card.Body>
										<Card.Title>
											Name: <b>{product.name}</b>
										</Card.Title>
										<h6> {product.description} </h6>
										{/*<h5> id: {product.id} </h5>*/}
										<h5> price : &#8377; {product.price} </h5>
										{/*<h6> stock: {product.stock} </h6>*/}

										<Link
											style={{ margin: ' 0.5rem' }}
											className="btn btn-outline-primary"
											to={`/${product.productId}/placeOrder`}
										>
											Place Order
										</Link>

										{/*<a href="/order">
									<button type="button" class="btn btn-outline-primary">
										Place Order
									</button>
				</a>*/}
									</Card.Body>
								</Card>
							</Col>
						))}
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default ShowProduct;
