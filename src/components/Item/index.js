import React, {useEffect, useState} from "react"
import "./Item.css"

export const Item = props => {
	const [status, setStatus] = useState(props.status)

	useEffect(() => {
		statusSelector()
	})

	const statusSelector = () => {
		if (props.status === "Done") {
			setStatus("is-success is-light")
		} else if (props.status === "In progress") {
			setStatus("is-warning is-light")
		} else {
			setStatus("is-danger is-light")
		}
	}

	return (
		<li className="item">
			<div className={`item-wrapper notification ${status}`}>
				<h3 className="item-title">{props.title}</h3>
				<p className="item-deadline-text">Deadline: {props.deadline}</p>
				<p>Status: {props.status}</p>
			</div>
		</li>
	)
}
