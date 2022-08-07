import React from 'react';
import './CompletedContent.css';
import ListItem from '../ListItem/ListItem';

function CompletedContent(props) {
	return (
		<div className="app__main-container">
			{
				props.noteContent.map((information) => {
					if (information.completed) {
						return (
							<ListItem key={information.id} id={information.id} text={information.text} completed={information.completed} handleNodeClick={props.handleNodeClick} />
						)
					}
				})
			}
		</div>
	)
}

export default CompletedContent;