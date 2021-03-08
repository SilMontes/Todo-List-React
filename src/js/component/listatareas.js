import React from "react";
import "../../styles/index.scss";
import PropTypes from "prop-types";

export function ListaTareas(props) {
	return (
		<div>
			{props.addTask.map((tarea, i) => {
				return (
					<div className="items" key={i}>
						<ul>
							<li>{tarea.item}</li>
						</ul>
						<button>x</button>
					</div>
				);
			})}
		</div>
	);
}
ListaTareas.propTypes = {
	addTask: PropTypes.any
};
