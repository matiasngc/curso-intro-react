import { useContext } from 'react'
import { TodoContext } from '../TodoContext/index';
import './TodoCounter.css';

const TodoCounter = () => {

  const { totalTodos, completedTodos } = useContext(TodoContext)

  return (
    <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
  );
}

export { TodoCounter };