import React from "react"
import {Item} from "../Item"
import "./List.css"

export const List = props => {
	const items = props.listItems.map(item => (
		<Item
			id={item.id}
			title={item.title}
			status={item.status}
			deadline={item.deadline}
		/>
	))
	return (
		<div className="list">
			<ul>{items}</ul>
		</div>
	)
}
