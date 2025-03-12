import {Component} from "react";

class ListItem extends Component {

	render() {

		const task = this.props.task;
		//const {task, onToggleTitle, onToggleImportant, onDeleteClick} = this.props.task;

		let classNames = 'todo-item';

		if (task.important)
			classNames += ' important';
		if (task.done)
			classNames += ' done';

		return (
		<li className={classNames}>
			<span className="todo-item-text"
			onClick={()=> {this.props.onToggleTitle(task.id)}} 
			>
				{task.title}
			</span>
			<div className="btn-group">
				<button
				onClick={() => {this.props.onToggleImportant(task.id)}} 
				role="button" 
				className="btn btn-outline-success btn-sm">
					Важное
				</button>
					
				<button 
				onClick={ () => {this.props.onDeleteClick(task.id) }}
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
