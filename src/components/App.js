import React from "react";

import Header from './Header';
import Search from './Search';
import List from './List';
import Footer from './Footer';

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

	render() {
		return (
			<div>
				<Header />
				<Search />
				<List 
				data={this.state.todoData} 
				onToggleImportant={this.onToggleImportant}
				onToggleTitle={this.onToggleTitle}
				/>
				<Footer />
			</div>
		);
	}
} 



export default App;
