import React, {useEffect, useState} from "react"
import {Button} from "../Button"
import {Footer} from "../Footer/index"
import {Header} from "../Header/index"
import {List} from "../List"
import {Modal} from "../Modal"
import "./Page.css"

export const Page = () => {
	const [list, setList] = useState([])

	const addItem = (title, deadline, status) => {
		const newItem = {id: "id", title: title, deadline: deadline, status: status}

		setList([...list, newItem])
	}

	useEffect(() => {
		setList(list)
	}, [list])
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
