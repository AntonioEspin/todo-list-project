import { TodoTitle } from './TodoTilte';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { TodoCounter } from './TodoCounter';
import { TodoActions } from './TodoActions';
import { TodoLoader } from './TodoLoader';
import { TodoError } from './TodoError';
import { TodoContext} from './Context';
import { useContext } from 'react';
import { Modal } from './Modal';
import { TodoCreateButton } from './TodoCreateButton';
import { TodoForm } from './TodoForm';
import { TodoWriteFirstTodo } from './TodoWriteFirstTodo';

function App() {

  const {
    loading,
    error,
    searchTodos,
    onComplete,
    onDelete,
    openModal,
    darkMode} = useContext(TodoContext)

  return (
    <>
      <section className={`SearchContainer ${darkMode ? 'SearchContainerDark': ''}`}>
        <TodoTitle />
        <TodoSearch />
      </section>
      <section className={`listContainer ${darkMode ? 'listContainerDark': ''}`}>
        <TodoList>
          {loading && <TodoLoader/>}
          {error && <TodoError />}
          {(!loading && searchTodos.length === 0) && <TodoWriteFirstTodo />}
          {searchTodos.map(todo => (
            <TodoItem 
              key={todo.text}
              text ={todo.text}
              completed ={todo.completed} 
              onComplete = {()=> onComplete(todo.text)}
              onDelete = {()=> onDelete(todo.text)}
              darkMode={darkMode}
            />
          ))}
        </TodoList>
        {loading ? ''
          :
          <>
            <TodoCounter />   
            <TodoActions />
            <TodoCreateButton />
          </> 
        }
      </section>
      {openModal &&
        <Modal>
          <TodoForm />
        </Modal>
      }
    </>
  );
}

export default App;
