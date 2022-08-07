import React from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.css';
import Navigation from '../Navigation/Navigation';

function Layout(props) {
	const [note, setNote] = React.useState('');
	const textInput = React.useRef();

	function hanldeChange(evt) {
		const { value } = evt.target;
		setNote(value);
	}

	function resetForm() {
		textInput.current.value = '';
		setNote('');
	}

	function handleClick(evt) {
		evt.preventDefault();

		props.handleNoteAdd({
			text: note,
			completed: false,
			id: parseInt(Math.random() * 1000)
		})

		resetForm()
	}

	return (
		<>
			<header className="app__header">
				<h1 className="app__header-title">todos</h1>
			</header>
			<main className="app__main">
				<form className="app__main-form">
					<button className="app__main-button" onClick={handleClick} ></button>
					<input ref={textInput} className="app__main-input" placeholder="What needs to be done?" onChange={hanldeChange}></input>
				</form>
				<Outlet />
				<div className="app__main-footer">
					<p className="app__main-footer-counter"><span className="app__main-footer-number">{props.counter}</span> items left</p>
					<Navigation />
					<button className="app__main-footer-button" onClick={props.cleanCompleted} >Clear completed</button>
					<div className="app__main-footer-background app__main-footer-background-first"></div>
					<div className="app__main-footer-background app__main-footer-background-second"></div>
				</div>
			</main>
			<footer></footer>
		</>
	)
}

export default Layout;