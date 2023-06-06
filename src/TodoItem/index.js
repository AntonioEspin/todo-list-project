import './TodoItem.css'

function TodoItem ({text, completed, onComplete, onDelete, darkMode}){
  return (
    <li className={`todo-item ${darkMode ? 'todo-item-dark': ''}`}>
      <figure 
        className= {
          `container-check ${completed ? 'check-completed': ''}`
        } 
        onClick={onComplete}
        >
        <img src="./images/icon-check.svg" alt="icon-check" />
      </figure>
      <p className={
        `${completed ? 'phrase-completed': ''}
        
        ${(completed && darkMode)? 'phrase-completed-dark':''}`}>{text}</p>
      <img src="./images/icon-cross.svg" alt="icon-cross" onClick={onDelete} />
    </li>
  )
};

export {TodoItem};