import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';

import { listProducts } from '../actions/productActions';
// import configAxios from '../../configs/configAxios.js';

const HomeScreen = () => {
	const dispatch = useDispatch();

	const productList = useSelector((state) => state.productList);
	const { loading, error, products } = productList;
	// const [products, setProducts] = useState([]);

	useEffect(() => {
		dispatch(listProducts());
		// const fetchProducts = async () => {
		// 	const { data } = await axios('/api/products');
		// 	console.log('data', data);
		// 	setProducts(data);
		// };
		// {
		// 	proxy: { host: 'localhost', port: 5000 },
		// 	headers: {
		// 		accepts: 'application/json'
		// 	}
		// }
		// fetchProducts();
	}, [dispatch]);

	return (
		<>
			<h1>Latest Products</h1>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<Row>
					{products.map((product) => (
						<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
							<Product product={product} />
						</Col>
					))}
				</Row>
			)}
		</>
	);
};
export default HomeScreen;
