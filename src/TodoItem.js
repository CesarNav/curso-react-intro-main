

function TodoItem({ text, completed }) {
    return (<li>
      <button className='todo-item'>{completed}</button> 
      <p>{text}</p>
      </li>
    );
} 

export { TodoItem };


