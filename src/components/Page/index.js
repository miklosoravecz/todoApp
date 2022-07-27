import React from "react"
import {Button} from "../Button"
import {Footer} from "../Footer/index"
import {Header} from "../Header/index"
import {List} from "../List"
import {Modal} from "../Modal"
import "./Page.css"

export const Page = () => {
	return (
		<div className="page">
			<Header />
			<main className="page-main">
				<Button cls="page-add-btn">Add a new todo!</Button>

				<Modal />
				<List />
			</main>
			<Footer />
		</div>
	)
}
