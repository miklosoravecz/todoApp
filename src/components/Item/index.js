import React, {useEffect, useState} from "react"
import {Button} from "../Button"
import "./Item.css"

export const Item = props => {
	const [status, setStatus] = useState(props.status)

	useEffect(() => {
		statusSelector()
	})

	const statusSelector = () => {
		if (props.status === "Done") {
			setStatus("is-success")
		} else if (props.status === "In progress") {
			setStatus("is-warning")
		} else {
			setStatus("is-danger")
		}
	}

	const handleDelete = () => {
		props.deleteItem(props.id)
	}

	return (
		<li className="item" id={props.id}>
			<div className={`item-wrapper notification ${status}`}>
				<div>
					<h3 className="item-title">{props.title}</h3>
					<p className="item-deadline-text">Deadline: {props.deadline}</p>
					<p>Status: {props.status}</p>
				</div>
				<div>
					<Button func={handleDelete}>Delete</Button>
				</div>
			</div>
		</li>
	)
}
