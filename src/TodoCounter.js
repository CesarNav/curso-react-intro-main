import './TodoCounter.css';

function TodoCounter({total, completed}) {
    return(
        <div className='TodoCounter'>
            <h2> Has completado <span>{completed}</span> de <span>{total}</span> tareas</h2>
        </div>
        
    );
}

export {TodoCounter};