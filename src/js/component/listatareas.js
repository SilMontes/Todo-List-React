import React from "react";
import "../../styles/index.scss";
import PropTypes from "prop-types";

export function ListaTareas(props) {
	const deleteTask = index => {
		const newList = props.list.filter(indexit => {
			return indexit != index;
		});

		props.updateList(newList);
	};
	return (
		<div className="listaDiv">
			<ul>
				{props.list.map((tarea, index) => {
					return (
						<div className="lista" key={index}>
							<li>
								<i
									id="pushpin"
									className="fas fa-thumbtack"></i>
								{tarea}
								<button onClick={() => deleteTask(index)}>
									<i className="fas fa-times"></i>
								</button>
							</li>
						</div>
					);
				})}
			</ul>
		</div>
	);
}
ListaTareas.propTypes = {
	list: PropTypes.array,
	updateList: PropTypes.func
};
