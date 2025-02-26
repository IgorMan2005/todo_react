import React from "react";

class ListItem extends React.Component {
	render() {

		console.log('props.task.title:', this);

		return (
		<li className="todo-item">
			<span className="todo-item-text">{this.props.task.title}</span>
			<div className="btn-group">
				<button role="button" className="btn btn-outline-dark btn-sm">
					Важное
				</button>
				<button role="button" className="btn btn-outline-danger btn-sm">
					Удалить
				</button>
			</div>
		</li>
		);
	} 
}

export default ListItem;
