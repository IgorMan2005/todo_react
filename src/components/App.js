import React from "react";

import Header from './Header';
import Search from './Search';
import List from './List';
import Footer from './Footer';

class App extends React.Component {

	state = {
			todoData: [
			{ id: 0, title: 'Выпить кофе', important: false, done: false },
			{ id: 1, title: 'Сделать React приложение', important: true, done: false  },
			{ id: 2, title: 'Позавтракать', important: false, done: false  },
		]
	}

	onToggleImportant = (id) => {
		console.log('onToggleImportant:', id);
	}


	render() {
		return (
			<div>
				<Header />
				<Search />
				<List data={this.state.todoData} onToggleImportant={this.onToggleImportant}/>
				<Footer />
			</div>
		);
	}
} 



export default App;
