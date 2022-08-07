import React from 'react';
import './AllContent.css';
import ListItem from '../ListItem/ListItem';

function AllContent(props) {
	return (
		<div className="app__main-container">
			{
				props.noteContent.map((information) => {
					return (
						<ListItem key={information.id} id={information.id} text={information.text} completed={information.completed} handleNodeClick={props.handleNodeClick} />
					)
				})
			}
		</div>
	)
}

export default AllContent;