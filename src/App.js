import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Layout from './components/Layout';
import Footer from './components/Footer';
function App() {
	return (
		<div className='App'>
			<Nav />
			<Layout />
			<Footer />
		</div>
	);
}

export default App;
