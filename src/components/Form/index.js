import React from "react"
import "./Form.css"

export const Form = () => {
	return (
		<form className="form">
			<input
				type="text"
				id="title"
				className="input"
				name="Title"
				placeholder="Title"
			/>
			<input
				type="text"
				id="deadline"
				className="input"
				name="Deadline"
				placeholder="Deadline"
			/>
			<div className="form-buttons">
				<select className="form-select" name="Status" id="status">
					<option value="" disabled selected>
						Status
					</option>
					<option value="In progress">In progress</option>
					<option value="Not started">Not started</option>
					<option value="Done">Done</option>
				</select>
				<div className="button-wrapper">
					<button type="submit" className="button">
						Cancel
					</button>
					<button type="submit" className="button">
						Add
					</button>
				</div>
			</div>
		</form>
	)
}
