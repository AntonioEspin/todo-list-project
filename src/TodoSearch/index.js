import { useContext } from 'react';
import { TodoContext } from '../Context';
import './todoSearch.css'

function TodoSearch () {
  const {searchValue, setSearchValue} = useContext(TodoContext)
  return (
    <input 
      className=''
      placeholder="Cortar la cebolla"
      value={searchValue}
      onChange={(e)=>setSearchValue(e.target.value)}
    />
  )
};

export {TodoSearch};