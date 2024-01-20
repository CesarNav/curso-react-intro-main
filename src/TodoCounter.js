import './TodoCounter.css';

function TodoCounter({totalTodos, completedTodos}) {
    return(
        <div className='TodoCounter'>
            <h2> Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> tareas</h2>
        </div>
    );
}

export {TodoCounter};