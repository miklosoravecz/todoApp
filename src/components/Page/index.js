import React, {useState} from "react"
import {Button} from "../Button"
import {Footer} from "../Footer/index"
import {Header} from "../Header/index"
import {List} from "../List"
import {Modal} from "../Modal"
import {Info} from "../Info"
import "./Page.css"
import {v4 as uuidv4} from "uuid"

export const Page = () => {
	const [list, setList] = useState([])
	const [validationError, setValidationError] = useState(null)
	const [isModalOpen, setIsModalOpen] = useState(false)

	const handleOnClick = e => {
		e.preventDefault()
		setIsModalOpen(true)
	}

	const handleCancel = e => {
		e.preventDefault()
		e.stopPropagation()
		setIsModalOpen(false)
	}

	const addItem = (title, deadline, status) => {
		if (title.length === 0 || deadline.length === 0) {
			setValidationError("Title and deadline must be filled!")
			return
		}

		const newItem = {
			id: uuidv4(),
			title: title,
			deadline: deadline,
			status: status
		}
		setList([...list, newItem])
		setValidationError(null)
	}

	const editItem = (id, newTitle, newDeadline, newStatus) => {
		const editedItem = list.map(item => {
			if (item.id === id) {
				return {
					...item,
					title: newTitle,
					deadline: newDeadline,
					status: newStatus
				}
			}
			return item
		})
		setList(editedItem)
	}

	const deleteItem = id => {
		const remainingItems = list.filter(item => id !== item.id)
		setList(remainingItems)
	}

	const setModalState = () => {
		setIsModalOpen(false)
	}

	return (
		<div className="page">
			<Header />
			<main className="page-main">
				<Button func={handleOnClick} cls="page-add-btn">
					Add a new todo!
				</Button>
				{isModalOpen && (
					<>
						<Modal
							addItem={addItem}
							validationError={validationError}
							handleCancel={handleCancel}
							setModalState={setModalState}
						/>
					</>
				)}
				<List list={list} deleteItem={deleteItem} editItem={editItem} />
				<Info />
			</main>
			<Footer />
		</div>
	)
}
