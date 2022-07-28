import React, {useEffect, useState} from "react"
import {ModalEdit} from "../ModalEdit"
import "./Item.css"

export const Item = props => {
	const [status, setStatus] = useState(props.status)
	const [isModalOpen, setIsModalOpen] = useState(false)

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
		e.stopPropagation()
		setIsModalOpen(true)
	}

	const handleDelete = e => {
		e.preventDefault()
		e.stopPropagation()
		props.deleteItem(props.id)
	}

	const handleCancel = e => {
		e.preventDefault()
		e.stopPropagation()
		setIsModalOpen(false)
	}

	const setModalClosed = () => {
		setIsModalOpen(false)
	}

	return (
		<>
			<button
				id={props.id}
				className={`item-button  notification ${status}`}
				onClick={handleEdit}
			>
				<div>
					<h3 className="item-title">{props.title}</h3>
					<p className="item-deadline-text">Deadline: {props.deadline}</p>
				</div>
			</button>
			{isModalOpen && (
				<ModalEdit
					id={props.id}
					title={props.title}
					deadline={props.deadline}
					editItem={props.editItem}
					isModalOpen={isModalOpen}
					handleDelete={handleDelete}
					handleCancel={handleCancel}
					setModalClosed={setModalClosed}
				/>
			)}
		</>
	)
}
