import React from "react"
import {Form} from "../Form"
import {ValidationError} from "../ValidationError"
import "./Modal.css"

export const Modal = props => {
	return (
		<div className="modal-wrapper">
			<h2 className="form-title">Add a new todo to the list</h2>
			<Form addItem={props.addItem} handleCancel={props.handleCancel} />
			<ValidationError validationError={props.validationError} />
		</div>
	)
}
