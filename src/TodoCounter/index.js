import { useContext } from 'react'
import { TodoContext } from '../Context'
import './todoCounter.css'

function TodoCounter () {

  const {incompleteTodos, darkMode, deleteCompletedTodos, handleSelectedItem} = useContext(TodoContext)

  const handleDeletedTodos = () => {
    deleteCompletedTodos()
    handleSelectedItem(null)
  }

  return (
    <section className={`container-counter ${darkMode ? 'container-counter-dark': ''}`}>
      {
        incompleteTodos !== 0
          ? 
          <p>{incompleteTodos} items left</p>
          :
          <p>All items Completed</p>
      }
      <p onClick={handleDeletedTodos}>Clear completed</p>
    </section>
  )
};

export {TodoCounter}