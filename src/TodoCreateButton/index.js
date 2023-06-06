import { useContext } from 'react'
import { TodoContext } from '../Context'
import './TodoCreateButton.css'

function TodoCreateButton () {
  const {openModal ,setOpenModal} = useContext(TodoContext)
  return (
    <section className='button-container'>
      <button className="CreateTodoButton" onClick={()=>setOpenModal(!openModal)}>+</button>
    </section>
  )
}

export {TodoCreateButton}