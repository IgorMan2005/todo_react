
function StatusBar(props) {

const buttons = [
	{status:'all', name:'Все'},
	{status:'active', name:'Активные'},
	{status:'done', name:'Выполненные'},
]

const buttonsMap = buttons.map((button) => {

	const btnClass = props.status === button.status ? 'btn-primary' : 'btn-light';

	return (
			<button 
				key={button.status} 
				onClick={() => props.changeStatus(button.status)} 
				type="button" 
				className={`btn ${btnClass}`}
				>
				{button.name}
			</button>
		)
		
	})

    return ( 
           <div className="btn-group" role="group">
				{buttonsMap}
			</div>
     );
}

export default StatusBar;