import React from 'react';
import './ListItem.css';

function ListItem(props) {

	const [isCompleted, setIsCompleted] = React.useState(props.completed);

	React.useEffect(() => {
		props.handleNodeClick(props.id, isCompleted);
	}, [isCompleted])

	function handleClick() {
		setIsCompleted(!isCompleted);
	}

	return (
		<div className="list-item" onClick={handleClick}>
			<div className={`list-item__checkbox ${isCompleted ? 'list-item__checkbox_completed' : ''}`}></div>
			<p className={`list-item__text ${isCompleted ? 'list-item__text_completed' : ''}`}>{props.text}</p>
		</div>
	)
}

export default ListItem;