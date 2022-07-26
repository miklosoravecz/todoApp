import React from "react"
import {Footer} from "../Footer/index"
import {Header} from "../Header/index"
import "./Page.css"

export const Page = () => {
	return (
		<div className="page">
			<Header />
			<main className="main">
				<h1 className="main__text">Here coming the list</h1>
			</main>
			<Footer />
		</div>
	)
}
