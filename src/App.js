import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route, Navigate, } from 'react-router-dom';
import Home from './pages'
import UIUX from './pages/uiux';
import Dance from './pages/dance';
import Art from'./pages/art';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' exact element={<Home/>} />
		<Route path='/uiux' element={<UIUX/>} />
		<Route path='/dance' element={<Dance/>} />
		<Route path='/art' element={<Art/>} />
		<Route path="*" element={<Navigate to="/" replace />} />
	</Routes>
	</Router>
);
}

export default App;
