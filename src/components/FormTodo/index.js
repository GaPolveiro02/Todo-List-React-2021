import { useEffect, useState } from "react"

const FormTodo = () => {

    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);
    

    const handleChange = (e) => {
        //Function to manipulate value from input
        setInputValue(e.target.value) //Get value from input
    } 

    const handleClick = (event) => {
        //Add a todo in todo array
        event.preventDefault(); //Stop the refresh page
        setTodos([...todos, inputValue]);
        setInputValue("");
    }

    const clearTodos = () => {
        //Function to clear all todos
        setTodos([]); //Set todos empty
        console.log(todos);
    }

    const deleteTodo = (todo) => {
        //Function to delete todo
        console.log(todo)

        console.log(todos.filter(todos => todos !== todo))
        setTodos(todos.filter(todos => todos !== todo))
    }

    const updateTodo = (todo) => {
        //Function to update todo
        const newTodo = inputValue

        console.log(newTodo);
        console.log(todo);

        setTodos(todos.map(todo => todo = newTodo));
    }

    return (
        <div>
            <h1>What we're doing for today ?</h1>
            <form>
                <input placeholder="Type a todo" type="text" value={inputValue} onChange={(e) => handleChange(e)}/>
                <button disabled={!inputValue} type='submit' onClick={(e) => handleClick(e)}>Add</button>
                <button onClick={() => clearTodos()}>Clear all</button>
            </form>
            
            <ul>
                {todos.map(todo => (
                    <li key={todo}>
                        <h3>{todo}</h3> 
                        <button onClick={() => deleteTodo(todo)}>Delete</button> 
                        <button onClick={() => updateTodo(todo)}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FormTodo