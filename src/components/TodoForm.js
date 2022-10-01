import { useState, useContext } from 'react'
import { TodoContext } from '../TodoContext'
import './TodoForm.css'

const TodoForm = () => {
    const [newTodoText, setNewTodoText] = useState('')

    const { addTodo, setOpenModal } = useContext(TodoContext)

    const onChange = event => {
        setNewTodoText(event.target.value)
    }

    const onCancel = () => {
        setOpenModal(prevState => !prevState)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoText)
        setOpenModal(prevState => !prevState)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                placeholder="Ejemplo: Crear una App con JavaScript Vanilla"
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type='button'
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type='submit'
                    className="TodoForm-button TodoForm-button--add"
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm }
