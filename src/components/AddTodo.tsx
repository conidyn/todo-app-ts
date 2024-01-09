import { useState } from "react"
import { TodoMock } from "../types"
import uuidv4 from "uuidv4"


interface AddTodoProps {
 todos: TodoMock[],
 setTodos: React.Dispatch<React.SetStateAction<TodoMock[]>>
}

export const AddTodo = ({todos, setTodos}: AddTodoProps) => {
    const [input, setInput] = useState<string>('');
    const [isCompleted, setIsCompleted] = useState<boolean>(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)

    const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTodos([...todos, {todo: input, isCompleted, id: uuidv4()}]);
        setInput('')
    }

    return (
            <div>
                <form onSubmit={handleAddTodo}>
                    <input 
                        className={"input-checkbox"} 
                        type={"checkbox"}
                        checked={isCompleted}
                        onChange={() => setIsCompleted(!isCompleted)}
                        />
                    <input 
                        className={"input-text"}
                        type={"text"} 
                        placeholder={"Create a new todo"}
                        value={input}
                        onChange={(e) => handleChange(e)}
                        />
                </form>
            </div>
    )
}
