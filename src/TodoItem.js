import './TodoItem.css';

function TodoItem({ text, completed }) {
    return (
    <li className='TodoItem'>
      <span className='Icon Icon-check
      Icon-check--active'>{completed}V</span> 
      <p className='TodoItem-p
      TodoItem-p--completed'>
        {text}
      </p>
      <span className='Icon Icon-delete'>
        x
      </span>
    </li>
    );
} 

export { TodoItem };


