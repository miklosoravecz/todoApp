import React from "react"
import "./Button.css"

export const Button = ({children, cls}) => {
	return (
		<button className={`button is-info is-light is-outlined is-light ${cls}`}>
			{children}
		</button>
	)
}
