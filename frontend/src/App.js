import React from 'react';
import GlobalStyle from '../src/components/GlobalStyle';
import Routes from './Routes';
import { ToastContainer } from 'react-toastify';

function App() {
	return (
		<div className="App">
			<ToastContainer />
			<Routes />
			<GlobalStyle />
		</div>
	);
}

export default App;
