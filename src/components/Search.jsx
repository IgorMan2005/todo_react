function Search(props) {
    return (
		
			<input type="text" 
			onChange={(e) => props.changeSearch(e.target.value)}
			value={props.search}
			placeholder="введите фразу для поиска" 
			className="form-control me-2" />
				
	);
}

export default Search;