import React, { useState } from "react";
import { ListaTareas } from "./listatareas";

//create your first component
export function Home() {
	const [list, setList] = useState([]);
	const [task, setTask] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		if (task === "") {
			alert("Nedd to add task");
		} else {
			setList([...list, task]);
		}
		setTask("");
	};
	const handleChange = e => {
		setTask(e.target.value);
	};

	return (
		<React.Fragment>
			<div className="text-center">
				<p>todos</p>
			</div>
			{/*<p>{JSON.stringify(task)}</p>
			<p>{JSON.stringify(list)}</p>*/}
			<div className="formDiv">
				<form className="formulario" onSubmit={e => handleSubmit(e)}>
					<input
						type="text"
						placeholder="What needs to be done?"
						onChange={e => handleChange(e)}
						value={task}
					/>
				</form>
				<ListaTareas list={list} updateList={setList} />
				<cite>{"Pending tasks: " + list.length}</cite>
			</div>
		</React.Fragment>
	);
}
