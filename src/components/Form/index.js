import React, {useState} from "react"
import {Button} from "../Button"
import "./Form.css"

export const Form = props => {
	const [title, setTitle] = useState("Title")
	const [deadline, setDeadline] = useState("Deadline")
	const [status, setStatus] = useState("Not started")

	const handleSubmit = e => {
		e.preventDefault()
		props.addItem(title, deadline, status)
		setTitle("Title")
		setDeadline("Deadline")
		setStatus("Status")
	}

	const handleTitleChange = e => {
		setTitle(e.target.value)
	}

	const handleDeadlineChange = e => {
		setDeadline(e.target.value)
	}

	const handleStatusChange = e => {
		setStatus(e.target.value)
	}

	return (
		<form className="form">
			<input
				type="text"
				id="title"
				className="input"
				name="Title"
				value={title}
				onChange={handleTitleChange}
			/>
			<input
				type="text"
				id="deadline"
				className="input"
				name="Deadline"
				value={deadline}
				onChange={handleDeadlineChange}
			/>
			<div className="form-buttons">
				<select
					className="form-select"
					name="Status"
					id="status"
					onChange={handleStatusChange}
				>
					<option value="" disabled selected>
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
