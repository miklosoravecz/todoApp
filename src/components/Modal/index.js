import React from "react"
import {Form} from "../Form"
import "./Modal.css"

export const Modal = props => {
	return (
		<div className="modal-wrapper">
			<h2 className="form-title">Add a new todo to the list</h2>
			<Form
				addItem={props.addItem}
				handleCancel={props.handleCancel}
				setModalState={props.setModalState}
			/>
		</div>
	)
}
