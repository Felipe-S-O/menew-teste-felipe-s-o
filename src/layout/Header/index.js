import React from 'react';
import { NavLink } from 'react-router-dom';
import IMG from "../../assets/menew-linx.png";

import './styles.css';

export default function Header() {
	return (
		<nav className="l-header navbar navbar-expand-lg navbar-dark bg-primary">
			<NavLink to="/" activeClassName="active" className="navbar-brand">
				<span className="login-form-title">
					<img src={IMG} alt="Jovem Programador" />
				</span>
			</NavLink>

			<div className="collapse navbar-collapse" id="navbarColor01">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<NavLink to="/" activeClassName="active" className="nav-link">
							Listar
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/add-pro" activeClassName="active" className="nav-link">Adicinar</NavLink>
					</li>
				</ul>
			</div>
			<ul className="navbar-nav ml-md-auto">
				<NavLink to="/login" activeClassName="active" className="nav-link">
					Sair
				</NavLink>
			</ul>
		</nav>
	);
}
