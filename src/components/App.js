import React from "react";

import Header from './Header';
import Search from './Search';
import List from './List';
import Form from './Form';

class App extends React.Component {

	state = {
			todoData: [
			{ id: 0, title: 'Выпить кофе', important: false, done: false },
			{ id: 1, title: 'Сделать React приложение', important: false, done: false  },
			{ id: 2, title: 'Позавтракать', important: false, done: false  },
		]
	}

	onToggleImportant = (id) => {
		//console.log('onToggleImportant:', id);
		this.setState((state) => {
			// 1. Найти индекс
			const index = state.todoData.findIndex( (e) => e.id === id);
			// 2. Сформировать новый {} с обратным состоянием important
			const oldItem = state.todoData[index];
			//console.log(oldItem);
			const newItem = { ...oldItem, important: !oldItem.important}
			// console.log(newItem);
			// 3. Сформировать новый массив todoData
			const part1 = state.todoData.slice(0, index);		// часть массива до index
			const part2 = state.todoData.slice(index + 1);		// часть массива после index
			const newArray = [...part1, newItem, ...part2];

			return {
				todoData: newArray	// возвращаем новый массив (!)
			}
		})
	}

	onToggleTitle = (id) => {
		//console.log('onToggleTitle:', id);
		this.setState((state) => {
			// 1. Найти индекс
			const index = state.todoData.findIndex( (e) => e.id === id);
			// 2. Сформировать новый {} с обратным состоянием done
			const oldItem = state.todoData[index];
			//console.log(oldItem);
			const newItem = { ...oldItem, important: false, done: !oldItem.done}
			// console.log(newItem);
			// 3. Сформировать новый массив todoData
			const part1 = state.todoData.slice(0, index);		// часть массива до index
			const part2 = state.todoData.slice(index + 1);		// часть массива после index
			const newArray = [...part1, newItem, ...part2];

			return {
				todoData: newArray	// возвращаем новый массив (!)
			}
		})
	}

	onDeleteClick = (id) => {
			console.log('onDeleteClick:' , id);
			this.setState((state) => {
			// 1. Найти индекс
			const index = state.todoData.findIndex( (e) => e.id === id);
			// 2. Сформировать новый массив todoData без удалённого элемнта (!)
			const part1 = state.todoData.slice(0, index);		// часть массива до index
			const part2 = state.todoData.slice(index + 1);		// часть массива после index
			const newArray = [...part1, ...part2];

			return {
				todoData: newArray	// возвращаем новый массив (!)
			}
		})
	}

	// Add Task (!)
	addTask = (title) => {
		// console.log('addTask:', title);

		const newTask = {
			// id последнего элемента + 1
			id: this.state.todoData[this.state.todoData.length-1]['id'] + 1, 
			title: title, 
			important: false, 
			done: false
		}

		this.setState( (state) => {

			const newArray = [ ...state.todoData, newTask]

			return {
				todoData: newArray
			}
		} )
	}


	render() {
		return (
			<div>
				<Header />
				<Search />
				<List 
				data={this.state.todoData} 
				onToggleImportant={this.onToggleImportant}
				onToggleTitle={this.onToggleTitle}
				onDeleteClick={this.onDeleteClick}
				/>
				<Form addTask={this.addTask} />
			</div>
		);
	}
} 



export default App;
