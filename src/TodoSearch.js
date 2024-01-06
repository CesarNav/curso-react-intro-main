import './TodoSearch.css';

function TodoSearch() {
    return(
        <div className='TodoSearch'>
            <input className='TodoSearch input' placeholder="Buscar Tarea" />
            <button className='TodoSearch button'> Buscar </button>
        </div>
    );
}

export { TodoSearch };