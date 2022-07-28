import React, {useEffect, useState} from "react"
import {Button} from "../Button"
import {ModalEdit} from "../ModalEdit"
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

	const handleEdit = e => {
		e.preventDefault()
	}

	const handleDelete = e => {
		e.preventDefault()
		e.stopPropagation()
		props.deleteItem(props.id)
	}

	return (
		<>
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
					<div>
						<Button func={handleEdit}>Edit</Button>
					</div>
				</div>
			</li>
			<ModalEdit
				id={props.id}
				title={props.title}
				deadline={props.deadline}
				editItem={props.editItem}
			/>
		</>
	)
}
