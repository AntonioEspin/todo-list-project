import React from "react"
import { useState } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"

const TodoContext = React.createContext()

function TodoProvider ({children}) {

  const [darkMode, setDarkMode] = useState(false)

  const [openModal, setOpenModal] = useState(false);
  // Estado para el buscador TODO´s
  const [searchValue, setSearchValue] = useState('')

  const [selectedItem, setSelectedItem] = useState(null)

  const handleSelectItem = (item) => {
    setSelectedItem(item)
  }

  // Estado para la lista de TODO´S
  const {item:todos,setItem, saveItem:saveTodos, loading, error} = useLocalStorage('TODOS_V1', [])
  const incompleteTodos = todos.filter(todo => todo.completed === false).length;

  const searchTodos = todos.filter(todo => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase())
  })

  const getCompletedTodos = () => {
    const allTodos = JSON.parse(localStorage.getItem('TODOS_V1')) || [];
    const newTodos = [...allTodos];
    const completedTodos = newTodos.filter(todo => todo.completed === true);
    console.log(completedTodos);

    // Guardar la lista de completados en el localStorage
    localStorage.setItem('COMPLETED_TODOS', JSON.stringify(completedTodos));

    // No sobrescribir la lista original, solo mostrar los completados temporalmente
    setItem(completedTodos);
  };

  const getIncompleteTodos = () => {
    const allTodos = JSON.parse(localStorage.getItem('TODOS_V1')) || [];
    const newTodos = [...allTodos];
    const incompleteTodos = newTodos.filter(todo => !todo.completed);
    console.log(incompleteTodos);

    // No sobrescribir la lista original, solo mostrar los incompletos temporalmente
    setItem(incompleteTodos);
  };

  const getAllTodos = () => {
    const allTodos = JSON.parse(localStorage.getItem('TODOS_V1')) || [];
    setItem(allTodos);
  };

  const deleteCompletedTodos = () => {
    const newTodos = todos.filter(todo => !todo.completed);
    saveTodos(newTodos);
  };



  const addTodo = (text) => {
    const newTodos = [...todos]
    newTodos.push({
      text,
      completed: false
    })
    saveTodos(newTodos)
  }

  const onComplete = (text) => {
    const newTodos = [...todos]
    const newTodoIndex = newTodos.findIndex(todo => {
      return todo.text === text
    })
    newTodos[newTodoIndex].completed = true
    saveTodos(newTodos)
  }

  const onDelete = (text) => {
    const newTodos = [...todos]
    const newTodoIndex = newTodos.findIndex(todo => {
      return todo.text === text
    })

    newTodos.splice(newTodoIndex, 1)
    saveTodos(newTodos)
  }
  return (
    <TodoContext.Provider value={{
      searchValue,
      setSearchValue,
      loading,
      error,
      incompleteTodos,
      searchTodos,
      onComplete,
      onDelete,
      openModal,
      setOpenModal,
      addTodo,
      darkMode,
      setDarkMode,
      getCompletedTodos,
      getAllTodos,
      getIncompleteTodos,
      selectedItem,
      handleSelectItem,
      deleteCompletedTodos,
    }}>
      {children}
    </TodoContext.Provider>
  )
}

export {TodoContext, TodoProvider}