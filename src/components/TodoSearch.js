import { useContext } from 'react'
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

const TodoSearch = () => {

    const { searchValue, setSearchValue} = useContext(TodoContext)

    const onSearchValueChange = e => {
        console.log(e.target.value)
        setSearchValue(e.target.value)
    }
    
    return (
        <input
        className="TodoSearch"
        placeholder="Busca una tarea.."
        value={searchValue}
        onChange={onSearchValueChange}
        />
    )
}

export { TodoSearch };
