import React from "react"
import {Button} from "../Button"
import {Footer} from "../Footer/index"
import {Header} from "../Header/index"
import {Modal} from "../Modal"
import "./Page.css"

export const Page = () => {
	return (
		<div className="page">
			<Header />
			<main className="main">
				<ul>
					<h4 className="list-text">Going to shop</h4>
				</ul>
				<ul>
					<h4 className="list-text">Cooking soup</h4>
				</ul>
				<Button>Add a new todo!</Button>
				<Modal />
			</main>
			<Footer />
		</div>
	)
}
