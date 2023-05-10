import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './styles/main.scss';

import Relatorio from './pages/relatorio';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Relatorio />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
