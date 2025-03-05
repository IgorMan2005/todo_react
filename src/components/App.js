// Деструктуризация при импорте
import {Component} from "react";

import Header from './Header';
import Search from './Search';
import StatusBar from "./StatusBar";
import List from './List';
import Form from './Form';

class App extends Component {

	state = {
		// первоначальный массив  
		todoData: [
		{ id: 0, title: 'Выпить кофе', important: false, done: false },
		{ id: 1, title: 'Сделать React приложение', important: false, done: false  },
		{ id: 2, title: 'Позавтракать', important: false, done: false  },
		],
		// поиcковая фраза:
		search: '',
		// статус задач (фильтр) - all, active, done
		done: 'all',	
		// счётчик оставшихся дел
		count_bus_todo: 2,
		// счётчик сделанных дел
		count_bud_finished: 5,
	}


	// toggleParam for V. 3
	toggleParam = (id, param) => {
		
		this.setState((state) => {
			
			const newArray = state.todoData.map((task) => {
				return {
					...task,
					[param]: id === task.id ? !task[param] : task[param],					
				}
			})

			return {
				todoData: newArray	// возвращаем новый массив (!)
			}
		})

	}

	// newArray for toggleParam and countsBusiness
	// getNewArray	


	// Counts:
	countsBusiness = () => {
		this.setState((state) => {

			const allBus = state.todoData.length;
			const busFinished = state.todoData.filter((task) => {	
			 	if(task.done === 'done') {
					return true;
				}
			}).length;

			return {
				count_bus_todo: allBus - busFinished,
				count_bud_finished: busFinished,
			}
		})
	}

	

	// ---------------------

	// V. 1 
	onToggleImportant = (id) => {
		//console.log('onToggleImportant:', id);
		this.setState((state) => {
			// 1. Найти индекс
			const index = state.todoData.findIndex( e => e.id === id);
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
	

	// V. 2
	onToggleImportant_V2 = (id) => {
		//console.log('onToggleTitle:', id);
		this.setState((state) => {
			
			const newArray = state.todoData.map((task) => {
				return {
					...task,
					important: id === task.id ? !task.important : task.important,					
				}
			})

			return {
				todoData: newArray	// возвращаем новый массив (!)
			}
		})
	}	

	// V. 3
	onToggleImportant_V3 = (id) => {		
		this.toggleParam(id, 'important')
	}	

	// ---------------------

	// V. 1 
	onToggleTitle = (id) => {
		//console.log('onToggleTitle:', id);
		this.setState((state) => {
			// 1. Найти индекс
			const index = state.todoData.findIndex( e => e.id === id);
			// 2. Сформировать новый {} с обратным состоянием done
			const oldItem = state.todoData[index];
			//console.log(oldItem);
			const newItem = { ...oldItem, important: false, done: !oldItem.done}
			// console.log(newItem);
			// 3. Сформировать новый массив todoData
			const part1 = state.todoData.slice(0, index);		// часть массива до index
			const part2 = state.todoData.slice(index + 1);		// часть массива после index
			const newArray = [...part1, newItem, ...part2];

			const busFinished = state.count_bud_finished;

			return {
				count_bud_finished: busFinished + 1,
				todoData: newArray	// возвращаем новый массив (!)
			}
		})
	}

	// V. 2
	onToggleTitle_V2 = (id) => {
		//console.log('onToggleTitle:', id);
		this.setState((state) => {
			
			const newArray = state.todoData.map((task) => {
				return {
					...task,
					done: id === task.id ? !task.done : task.done,
				}
			})

			return {
				todoData: newArray	// возвращаем новый массив (!)
			}
		})
	}	

	// V. 3
	onToggleTitle_V3 = (id) => {
		this.toggleParam(id, 'done')
	}		

	// ---------------------

	// V.1 (Old)
	onDeleteClickOld = (id) => {
			console.log('onDeleteClick:' , id);
			this.setState((state) => {
				
			// 1. Найти индекс
			const index = state.todoData.findIndex( e => e.id === id);
			// 2. Сформировать новый массив todoData без удалённого элемнта (!)
			const part1 = state.todoData.slice(0, index);		// часть массива до index
			const part2 = state.todoData.slice(index + 1);		// часть массива после index
			const newArray = [...part1, ...part2];

			return {
				todoData: newArray	// возвращаем новый массив (!)
			}
		})
	}

	// V. 2
	onDeleteClick = (id) => {			
			this.setState((state) => {			
			return {
				todoData: state.todoData.filter((task) => task.id !== id)	// возвращаем новый массив (!)
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

	// search - filter tasks by title
	searchTask = (tasks, search) => {
		// если пустая поисковая фраза
		if( search.trim().length === 0)
			return tasks;

		// фильтрация по поисковой фразе:
		return tasks.filter((task) => {	
			if(task.title.toLowerCase().indexOf(search.toLowerCase().trim()) > -1 ) {
					return true;
				}
			});
	}


	// изменение в строке поиска
	changeSearch = (search) => {
		// console.log('changeSearch:', search);
		this.setState({
			search: search
		});
	}


	// Filter by Status
	filterByStatus = (tasks, status) => {
		switch (status) {
			case 'all':
				return tasks;
			case 'active':
				return tasks.filter( (task) => task.done === false);		// false
			case 'done':
				return tasks.filter( (task) => task.done === true);			// true
			default:
				return tasks;
		}
	}

	// Change Status (by bottons)
	changeStatus = (status) => {
		this.setState({
			done: status
		})
	}

	// -- RENDER ---------------------

	render() {

		// search
		const filterBySearchTasks = this.searchTask(this.state.todoData, this.state.search);
		// filter by status
		const filterByStatusTasks = this.filterByStatus(filterBySearchTasks , this.state.done);
	
		return (
			<div>
				<Header 
				count_bus_todo={this.state.count_bus_todo} 
				count_bud_finished={this.state.count_bud_finished} 
				countsBusiness={this.countsBusiness}
				/>
				<div className="search">
					<Search changeSearch={this.changeSearch} search={this.state.search}/>
					<StatusBar changeStatus={this.changeStatus} status={this.state.done} />
				</div>
				<List 
				// data={this.state.todoData} 
				data={filterByStatusTasks}							// Отправляем уже отфильтрованные по поиску и статусу задачи (!)
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
