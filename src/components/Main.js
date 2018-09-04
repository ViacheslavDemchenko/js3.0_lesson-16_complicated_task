import React, { Component } from 'react';
import '../App.css';

class Main extends React.Component {
	render() {
		return (
				<div className="main">
					<div className="container">
						<div className="content-block">
							<h1 className="content-block__title">быстрая доставка</h1>
							<div className="content-block__desc">
								<p className="content-block__text">бетона, щебня, песка</p>
								<p className="content-block__text">и других нерудных материалов</p>
								<p className="content-block__text">по Москве и Московской области</p>
							</div>
							<button className="content-block__btn">Подробнее о доставке</button>
							<span className="content-block__nearbtn-text">или</span>
							<span className="or"><a href="#" className="catalog-link">перейти в каталог</a></span>
						</div>
					</div>
				</div>
		)
	}
}

export default Main;