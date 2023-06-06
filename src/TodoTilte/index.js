import { useContext } from 'react'
import { TodoContext } from '../Context'
import './TodoTitle.css'

function TodoTitle () {
  const {darkMode, setDarkMode} = useContext(TodoContext)
  return (
    <header className='header__title'>
      <h1>TODO</h1>
      <img
        src="./images/icon-moon.svg"
        alt='icon-moon'
        className={darkMode ? 'imageModeDark': ''}
        onClick={()=> setDarkMode(!darkMode)}
      />
    </header>
  )
};

export {TodoTitle}