import React from 'react';
import logo from './logo.svg';
import Header from './component/Header';
import ProductList from './component/ProductList';
import {ProductCard} from './component/ProductCard';

function App() {
	return (
		<div>
			<Header />
			<ProductList>
				<ProductCard />
			</ProductList>
		</div>
	);
}

export default App;
