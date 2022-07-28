import React from "react"
import {Button} from "../Button"
import {Footer} from "../Footer/index"
import {Header} from "../Header/index"
import {List} from "../List"
import {Modal} from "../Modal"
import "./Page.css"

export const Page = () => {
	const DATA = [
		{
			id: "todo-0",
			title: "new title",
			deadline: "after tomorrow",
			status: "Done"
		},
		{
			id: "todo-1",
			title: "new title2",
			deadline: "tomorrow",
			status: "In progress"
		},
		{
			id: "todo-2",
			title: "new title3",
			deadline: "3 days later",
			status: "Not started"
		}
	]
	return (
		<div className="page">
			<Header />
			<main className="page-main">
				<Button cls="page-add-btn">Add a new todo!</Button>

				<Modal />
				<List listItems={DATA} />
			</main>
			<Footer />
		</div>
	)
}
