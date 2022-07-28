import React, {useState} from "react"
import {Button} from "../Button"
import {Footer} from "../Footer/index"
import {Header} from "../Header/index"
import {List} from "../List"
import {Modal} from "../Modal"
import "./Page.css"

export const Page = () => {
	const listItems = [
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
		},
		{
			id: "todo-2",
			title: "new title3",
			deadline: "3 days later",
			status: "Not started"
		}
	]
	const [list, setList] = useState(listItems)

	const addItem = (title, deadline, status) => {
		const newItem = {id: "id", title: title, deadline: deadline, status: status}
		setList([...listItems, newItem])
		console.log(newItem)
	}

	return (
		<div className="page">
			<Header />
			<main className="page-main">
				<Button cls="page-add-btn">Add a new todo!</Button>
				<Modal addItem={addItem} />
				<List list={list} />
			</main>
			<Footer />
		</div>
	)
}
