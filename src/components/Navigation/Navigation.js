import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {

	const setActive = ({ isActive }) => isActive ? 'app__main-footer-link app__main-footer-link_active' : 'app__main-footer-link';

	return (
		<nav className="app__main-footer-navigation">
			<NavLink to="/" className={setActive}>All</NavLink>
			<NavLink to="active" className={setActive}>Active</NavLink>
			<NavLink to="completed" className={setActive}>Completed</NavLink>
		</nav>
	)
}

export default Navigation;