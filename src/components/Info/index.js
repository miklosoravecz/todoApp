import React from "react"
import "./Info.css"

export const Info = ({children, cls, type, func}) => {
	return (
		<>
			<div>
				<h2 className="info-title">Status info</h2>
			</div>
			<div className="info">
				<div className="info-done">Done</div>
				<div className="info-not-started">Not started</div>
				<div className="info-in-progress">In progress</div>
			</div>
		</>
	)
}
