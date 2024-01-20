import React from 'react';
import './TodoItem.css';

function TodoItem({
  text,
  completed,
  setcompleted,}) {
    return (
    <li className='TodoItem'>
      <span 
      className={`Icon Icon-check ${completed && 'Icon-check--completed'}`}
      onClick={(event) => {
        setcompleted(completed= true);
        console.log('Completado', event);
        console.log(completed);
      }}>
        V
      </span> 
      <p className={`TodoItem-p ${completed && 
      'TodoItem-p--completed'}`}>
        {text}
      </p>
      <span className={`Icon Icon-delete`}>
        x
      </span>
    </li>
    );
} 

export { TodoItem };


