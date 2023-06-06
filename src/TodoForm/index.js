import { useContext, useState } from 'react'
import { TodoContext } from '../Context'
import './TodoForm.css'

function TodoForm () {

  const {addTodo, openModal, setOpenModal} = useContext(TodoContext)

  const [newTodoValue, setNewTodoValue] = useState('')

  const onSubmit = (event) => {
    event.preventDefault()
    addTodo(newTodoValue)
    setOpenModal(!openModal)
  }

  const getTodoValue = (event) => {
    setNewTodoValue(event.target.value)
  }

  const closeModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <form className='form-container' onSubmit={onSubmit}>
      <input value={newTodoValue} type="text" onChange={getTodoValue} autoFocus />
      <div className='form-button-container'>
        <button className='form-buttons button-cancel' onClick={closeModal}>Cancelar</button>
        <button className='form-buttons' type='submit'>Crear Todo</button>
      </div>
    </form>
  )
}

export {TodoForm}