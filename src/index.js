import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Header from './components/Header.js';
import Menu from './components/Menu.js';
import Main from './components/Main.js';

class App extends React.Component{
	render() {
		return  (
			<div className="container-fluid">
				<div className="container">
					<Header />
					<Menu />
				</div>
				<Main />
			</div>
		)
	}
}





ReactDOM.render(<App />, document.getElementById('root'));