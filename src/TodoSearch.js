import React from 'react';
import './TodoSearch.css';

function TodoSearch({
    searchValue,
    setSearchValue
}) {

    return(
        <div className='TodoSearch'>
            <input 
            className='TodoSearch input' 
            placeholder="Buscar Tarea"
            value={searchValue}
            onChange={
                (event) => {
                    setSearchValue(event.target.value)
                }
            }/>
            <button className='TodoSearch button'> Buscar </button>
        </div>
    );
}

export { TodoSearch };