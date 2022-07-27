import React from "react"
import {Item} from "../Item"
import "./List.css"

export const List = () => {
	return (
		<div className="list">
			<ul>
				<Item title="new title" deadline="after tomorrow" status="Done" />
				<Item title="new title2" deadline="tomorrow" status="In progress" />
				<Item title="new title3" deadline="3 days later" status="Not started" />
			</ul>
		</div>
	)
}
