import {Component} from "react";


class Form extends Component{
	state = {
		taskTitle: '' 
	}

	onInputChange = (e) => {
		// console.log(e.target.value);
		this.setState({
			taskTitle: e.target.value 
		})
	}

	onSubmit = (e) => {
		e.preventDefault();
		// console.log('Submit Form!');	

		// проверка на пустую задачу
		if(this.state.taskTitle.trim()) {
			this.props.addTask(this.state.taskTitle);

			// reset input
			this.setState({
				taskTitle: '' 
			})
		}
		
	}

	render () {
	   return (
		<form onSubmit={this.onSubmit} 
		className="footer">
			{/* {this.state.taskTitle}  */}
			<input 
			value={this.state.taskTitle}
			onChange={this.onInputChange}
			type="text" placeholder="Что необходимо сделать" className="form-control me-2" />
			<button type="submit" className="btn btn-primary">
				Добавить
			</button>
		</form>
	);
	}
}


export default Form;