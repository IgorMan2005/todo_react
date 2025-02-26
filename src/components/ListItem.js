import React from "react";

class ListItem extends React.Component {

	state = {
		important: false
	}

	onImportantClick() {
		console.log('onImportantClick!');
	}

	onDeleteClick = () => {
		console.log('onDeleteClick (!)');
	}

	render() {

		let classNames = 'todo-item';

		if (this.state.important)
			classNames += ' important';

		return (
		<li className={classNames}>
			<span className="todo-item-text">{this.props.task.title}</span>
			<div className="btn-group">
				<button
				onClick={this.onImportantClick} 
				role="button" 
				className="btn btn-outline-dark btn-sm">
					Важное
				</button>
				<button 
				onClick={ this.onDeleteClick }
				role="button" 
				className="btn btn-outline-danger btn-sm">
					Удалить
				</button>
			</div>
		</li>
		);
	} 
}

export default ListItem;
