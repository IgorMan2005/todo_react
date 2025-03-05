import { useEffect } from "react";

function Header(props) {

	// отрисовка счётчиков
	useEffect(()=>{
		props.countsBusiness();
	},[props.count_bus_todo, props.count_bud_finished])


    return (
		<header className="header">
			<h1 className="header-title">Список дел</h1>
			<span className="header-desc">{props.count_bus_todo} осталось, {props.count_bud_finished} сделано</span>
		</header>
	);
}

export default Header;