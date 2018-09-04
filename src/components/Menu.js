import React, { Component } from 'react';
import '../App.css';

class Menu extends React.Component {
	render() {
		return (
			<ul className="menu-list">
				<li className="menu-list__item"><a href="#" className="menu-list__link">Главная</a></li>
				<li className="menu-list__item"><a href="#" className="menu-list__link">Каталог</a></li>
				<li className="menu-list__item"><a href="#" className="menu-list__link">Услуги</a></li>
				<li className="menu-list__item"><a href="#" className="menu-list__link">Доставка</a></li>
				<li className="menu-list__item"><a href="#" className="menu-list__link">О компании</a></li>
				<li className="menu-list__item"><a href="#" className="menu-list__link">Контакты</a></li>
			</ul>
		)
	}
}


export default Menu;