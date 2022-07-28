import React from "react"
import {FormEdit} from "../FormEdit"
import {ValidationError} from "../ValidationError"
import "./ModalEdit.css"

export const ModalEdit = props => {
	return (
		<div className="modal-edit-wrapper">
			<h2 className="form-title">Edit list item</h2>
			<FormEdit
				id={props.id}
				title={props.title}
				deadline={props.deadline}
				editItem={props.editItem}
				handleDelete={props.handleDelete}
				handleCancel={props.handleCancel}
				setModalClosed={props.setModalClosed}
			/>
			<ValidationError validationError={props.validationError} />
		</div>
	)
}
