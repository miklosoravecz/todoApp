import React from "react"
import "./Button.css"

export const Button = ({children}) => {
	return (
		<button class="button is-info is-light is-outlined is-light">
			{children}
		</button>
	)
}
