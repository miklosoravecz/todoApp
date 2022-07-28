import React from "react"
import "./ValidationError.css"

export const ValidationError = props => {
	return (
		<div className="validation-error">
			<h2>{props.validationError}</h2>
		</div>
	)
}
