import React, { Component } from 'react';
import '../App.css';

class Header extends React.Component {
	render() {
		return (
			<div className="header-wrap">
				<div className="header">
					<a href="#" className="logo-link">
						<div className="logo"></div>
					</a>					
					<div className="logo-text">
						<p className="logo-title">Granit</p>
						<p className="logo-desc">Доставка нерудных материалов</p>
					</div>
					<div className="phone-block">
						<p className="phone-number">8 800 342-13-33</p>
						<p className="phone-desc">Бесплатный звонок по России</p>
					</div>
					<button className="header-btn">Обратный звонок</button>
				</div>
			</div>
		)
	}
}



export default Header;