import React from "react"
import {Button} from "../Button"
import {Footer} from "../Footer/index"
import {Header} from "../Header/index"
import "./Page.css"

export const Page = () => {
	return (
		<div className="page">
			<Header />
			<main className="main">
				<Button>Add a new todo!</Button>
			</main>
			<Footer />
		</div>
	)
}
