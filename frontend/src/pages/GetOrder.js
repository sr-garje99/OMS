import React, { useState, useEffect } from 'react';
import axios from 'axios';
import res from 'axios';

function GetOrder() {
	const [ posts, setPosts ] = useState([]);

	useEffect(() => {
		//console.log('>>>>>>>', posts);
		axios
			.get('http://127.0.0.1:8000/api/order/')
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
			<ul>{posts.map((post) => <li key={post.id}>{post.order_status}</li>)}</ul>
		</div>
	);
}

export default GetOrder;
