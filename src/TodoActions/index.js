import { useContext } from 'react'
import { TodoContext } from '../Context'
import './todoActions.css'

function TodoActions () {
  const {
    darkMode,
    getCompletedTodos,
    getIncompleteTodos,
    getAllTodos,
    selectedItem,
    handleSelectItem} = useContext(TodoContext);


  return (
    <nav className={`container-nav ${darkMode ? 'container-nav-dark':''}`}>
      <p
        className={selectedItem ===0 ? 'selected':''}
        onClick={()=>{
          getAllTodos();
          handleSelectItem(0);
        }}
      >All</p>
      <p 
        className={selectedItem ===1 ? 'selected':''}
        onClick={()=>{
          getIncompleteTodos();
          handleSelectItem(1)
        }}
      >Active</p>
      <p
        className={selectedItem === 2 ? 'selected':''}
        onClick={()=>{
          getCompletedTodos();
          handleSelectItem(2);
        }}
      >Completed</p>
    </nav>
  )
};

export {TodoActions}