// Деструктуризация при импорте
import {Component} from "react";


import Header from './Header';
import Search from './Search';
import StatusBar from "./StatusBar";
import List from './List';
import Form from './Form';
import getCountDone from "../utils/getCounDone";

// use data.js
import todoData from "../data/data";

// or use jsonServer
import jsonServer from "../data/jsonServer";
import Footer from "./Сopyright";

class App extends Component {

	// Первоначальные счётчики и state (!)
	count_bus_todo = getCountDone(todoData);
	count_bus_finished = todoData.length - this.count_bus_todo;

	state = {
		// первоначальный массив  
		todoData: todoData,
		// поиcковая фраза:
		search: '',
		// статус задач (фильтр) - all, active, done
		done: 'all',	
		// счётчик оставшихся дел
		count_bus_todo: this.count_bus_todo,
		// счётчик сделанных дел
		count_bus_finished: this.count_bus_finished,
	};


	// JSON Server start ----
	// flag to use jsonServer: true / false
	useJson = true;
	getJsonData = (useJson) => {
		
		if(useJson) {
			console.log('Try to use jsonServer: ', jsonServer);

			fetch(jsonServer).then((res)=>{
				return res.json();
			}).then((data) => {
				console.log('Fetched data:', data);
				// если не пустой массив
				if(data.length > 0) {
					
					this.setState((state) => {
						return {
							todoData: data
						}
					})
				}
				else {
					console.log('Oops! Fetched data is empty, we must continue to use todoData from "../data/data"');
				}

			}).catch( (error) =>{
				console.log("Error Reading data " + error);
				console.log('We must continue to use todoData from "../data/data"');
			} )
		}	

	}
	componentDidMount(){
		this.getJsonData(this.useJson);
	}
	// JSON Server end ----

		
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

	// Counts - счётчики дел (осталось, выполнено):
	countsBusiness = () => {

		console.log('countsBusiness!');

		this.setState((state) => {

			const allBus = state.todoData.length;
			const busFinished = state.todoData.filter((task) => {	
			 	if(task.done === 'done') {
					return true;
				}
			}).length;

			return {
				count_bus_todo: allBus - busFinished,	// осталось				- меням при выполнении onToggleTitle
				count_bus_finished: busFinished,		// выпонено (сделано)   - меням при выполнении onToggleTitle
			}
		})
	}

	
	// ---------------------
	// Различные варианты методов для работы со списком задач (todoData):

	// Важные дела - выделяем жирным при нажатии на кнопку Важное (!)

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

	// Выполненные дела - зачёркиваем при нажатии на название дела (!)

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

			const count_bus_finished = getCountDone(newArray);
			return {
				// счётчики:
				count_bus_finished: count_bus_finished,
				count_bus_todo: newArray.length - count_bus_finished,
				// новый массив:
				todoData: newArray
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

			const count_bus_finished = getCountDone(newArray);

			return {
				// счётчики:
				count_bus_finished: count_bus_finished,
				count_bus_todo: newArray.length - count_bus_finished,
				// новый массив:
				todoData: newArray
			}
		})
	}	

	// V. 3
	onToggleTitle_V3 = (id) => {
		this.toggleParam(id, 'done')
	}		

	// ---------------------
	// Удаление задачи

	// V.1 (Old)
	onDeleteClick = (id) => {
			// console.log('onDeleteClick:' , id);
			this.setState((state) => {
				
			// 1. Найти индекс
			const index = state.todoData.findIndex( e => e.id === id);
			// 2. Сформировать новый массив todoData без удалённого элемнта (!)
			const part1 = state.todoData.slice(0, index);		// часть массива до index
			const part2 = state.todoData.slice(index + 1);		// часть массива после index
			const newArray = [...part1, ...part2];

			const count_bus_finished = getCountDone(newArray);

			return {
				// счётчики:
				count_bus_finished: count_bus_finished,
				count_bus_todo: newArray.length - count_bus_finished,
				// новый массив:
				todoData: newArray
			}
		})
	}

	// V. 2
	onDeleteClick_V2 = (id) => {			
			this.setState((state) => {			
			
			return {			
				todoData: state.todoData.filter((task) => task.id !== id)	// возвращаем новый массив (!)
			}
		})
	}

	// ---------------------
	// Добавление задачи
	
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

			const count_bus_finished = getCountDone(newArray);

			return {
				// счётчики:
				count_bus_finished: count_bus_finished,
				count_bus_todo: newArray.length - count_bus_finished,
				// новый массив:
				todoData: newArray
			}
		} )
	}

	// ---------------------
	// Поиск (!)	
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


	// ---------------------
	// Фильтр по статусу (!)
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


	// -- RENDER - Отрисовка компонентов ------------------

	render() {

		// search
		const filterBySearchTasks = this.searchTask(this.state.todoData, this.state.search);
		// filter by status
		const filterByStatusTasks = this.filterByStatus(filterBySearchTasks , this.state.done);
	
		return (
			<>
			<div className="container">
				<Header 
				count_bus_todo={this.state.count_bus_todo} 
				count_bus_finished={this.state.count_bus_finished} 

				
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

				<Footer />
			</div>

			
			</>
			
		);
	}
} 

export default App;
