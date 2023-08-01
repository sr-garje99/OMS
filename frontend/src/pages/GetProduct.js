import React, { useState, useEffect } from 'react';
import { Card, Table } from 'react-bootstrap';
import axios from 'axios';
import res from 'axios';

function GetProduct() {
	const [ posts, setPosts ] = useState([]);

	useEffect(() => {
		//console.log('>>>>>>>', posts);
		axios
			.get('http://127.0.0.1:8000/api/products/')
			.then((res) => {
				console.log(res);
				setPosts(res.data);
			})
			.catch((err) => {
				console.log(res);
			});
	}, []);

	return (
		<div>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>
						{post.name}
						{post.image}
					</li>
				))}
			</ul>
		</div>
	);
}

export default GetProduct;
