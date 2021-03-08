import React, { useState } from "react";
import { ListaTareas } from "./listatareas";
import PropTypes from "prop-types";

//create your first component
export function Home() {
	const [currentTask, setCurrentTask] = useState("");
	const [addTaks, setAddTask] = useState([]);
	const changeHandler = e => {
		setCurrentTask(e.target.value);
	};
	const addTaksToList = () => {
		setAddTask([...addTaks, { item: currentTask }]); //, key: new Date()
		//console.log("lista", addTaks);
		setCurrentTask("");
	};
	return (
		<React.Fragment>
			<div className="text-center">
				<p>todos</p>
			</div>
			<div className="addTareas">
				<form className="formulario">
					<input
						type="text"
						placeholder="What needs to be done?"
						onBlur={addTaksToList}
						onChange={changeHandler}
						value={currentTask}></input>
				</form>
				<ListaTareas addTaks={addTaks} />
			</div>
		</React.Fragment>
	);
}
Home.propTypes = {
	addTaks: PropTypes.any
};
