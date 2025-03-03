function StatusBar() {
    return ( 
           <div className="btn-group" role="group">
				<button type="button" className="btn btn-primary">
					Все
				</button>
				<button type="button" className="btn btn-light">
					Активные
				</button>
				<button type="button" className="btn btn-light">
					Выполненные
				</button>
			</div>
     );
}

export default StatusBar;