import './App.css';
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: true},
  { text: 'Sacar cita del pasaporte', completed: true},
];

function App() {
  const [searchValue, setSearchValue] = React.useState('')
  const [todos, setTodos] = React.useState(defaultTodos)

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()))

  const [completed, setcompleted] = React.useState(false)
  return (
    <>
      <TodoCounter
        completedTodos={completedTodos} 
        totalTodos={totalTodos} />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
           key={todo.text}
           text={todo.text}
           completed={completed}
           setcompleted={setcompleted} />
        ))}
      </TodoList >
      <CreateTodoButton/>
    </>
  );
}

export default App;
