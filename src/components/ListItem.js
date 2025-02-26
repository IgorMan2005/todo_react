import React from "react";

class ListItem extends React.Component {

	onDeleteClick = () => {
		console.log('onDeleteClick (!)');
	}

	render() {

		let classNames = 'todo-item';

		if (this.props.task.important)
			classNames += ' important';
		if (this.props.task.done)
			classNames += ' done';

		return (
		<li className={classNames}>
			<span className="todo-item-text"
			onClick={()=> {this.props.onToggleTitle(this.props.task.id)}} 
			>
				{this.props.task.title}
			</span>
			<div className="btn-group">
				<button
				onClick={() => {this.props.onToggleImportant(this.props.task.id)}} 
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
