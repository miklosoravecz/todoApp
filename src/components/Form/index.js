import React, {useState} from "react"
import {Button} from "../Button"
import "./Form.css"

export const Form = props => {
	const [title, setTitle] = useState("Title")
	const [deadline, setDeadline] = useState("Deadline")
	const [status, setStatus] = useState("Not started")
	const [value, setValue] = useState("default")

	const handleSubmit = e => {
		e.preventDefault()
		props.addItem(title, deadline, status)
		setTitle("Title")
		setDeadline("Deadline")
		setStatus("Not started")
		setValue("default")
	}

	const handleTitleChange = e => {
		setTitle(e.target.value)
	}

	const handleDeadlineChange = e => {
		setDeadline(e.target.value)
	}

	const handleStatusChange = e => {
		setStatus(e.target.value)
		setValue(e.target.value)
	}

	return (
		<form className="form">
			<h3>Add a title</h3>
			<input
				type="text"
				id="title"
				className="input form-input"
				name="Title"
				value={title}
				onChange={handleTitleChange}
			/>
			<h3>Add deadline</h3>
			<input
				type="text"
				id="deadline"
				className="input form-input"
				name="Deadline"
				value={deadline}
				onChange={handleDeadlineChange}
			/>
			<h3>Select status</h3>
			<div className="form-buttons">
				<select
					className="form-select"
					name="Status"
					id="status"
					onChange={handleStatusChange}
					value={value}
				>
					<option value="default" disabled selected>
						Status
					</option>
					<option value="In progress">In progress</option>
					<option value="Not started">Not started</option>
					<option value="Done">Done</option>
				</select>
				<div className="button-wrapper">
					<Button type="submit" className="button">
						Cancel
					</Button>
					<Button type="submit" className="button" func={handleSubmit}>
						Add
					</Button>
				</div>
			</div>
		</form>
	)
}
