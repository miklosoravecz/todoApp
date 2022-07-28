import React from "react"
import {Item} from "../Item"
import "./List.css"

export const List = props => {
	const items = props.list.map(item => (
		<Item
			id={item.id}
			key={item.id}
			title={item.title}
			status={item.status}
			deadline={item.deadline}
			deleteItem={props.deleteItem}
			editItem={props.editItem}
		/>
	))
	return (
		<div className="list">
			<ul>{items}</ul>
		</div>
	)
}
