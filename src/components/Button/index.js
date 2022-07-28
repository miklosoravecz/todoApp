import React from "react"
import "./Button.css"

export const Button = ({children, cls, type, func}) => {
	return (
		<button
			type=""
			onClick={func}
			className={`button is-info is-light is-outlined is-light ${cls}`}
		>
			{children}
		</button>
	)
}
