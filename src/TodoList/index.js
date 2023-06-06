import { useContext } from 'react';
import { TodoContext } from '../Context';
import './todoList.css'

function TodoList ({children}) {
  const {darkMode} = useContext(TodoContext)
  return (
    <ul className={darkMode ? 'ulModeDark': ''}>
      {children}
    </ul>
  )
};

export {TodoList};