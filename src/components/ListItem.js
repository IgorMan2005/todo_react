import React from "react";

class ListItem extends React.Component {

	state = {
		important: false,
		done: false,
	}

	// Only () => (!)
	onImportantClick = () => {
		this.setState((state) => {
			return {
				// parametr state (!)
				important: !state.important
			}
		})
	}

	onDoneClick = () => {
		this.setState((state) => {
			return {
				// parametr state (!)
				done: !state.done
			}
		})
	}

	onDeleteClick = () => {
		console.log('onDeleteClick (!)');
	}

	render() {

		let classNames = 'todo-item';

		if (this.state.important)
			classNames += ' important';
		if (this.state.done)
			classNames += ' done';

		return (
		<li className={classNames}>
			<span className="todo-item-text"
			onClick={this.onDoneClick} 
			>
				{this.props.task.title}
			</span>
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
