import { TodoMock } from "../types";


// On définit les props pour que le parent sachent définir les valeurs à passer en props
export interface TodoListProps {
    todos: TodoMock[];
    filterTodos: [] | TodoMock[];
    setTodos: React.Dispatch<React.SetStateAction<TodoMock[]>>;
}




export const TodoList = ({ todos, filterTodos, setTodos }: TodoListProps) => {


    const handleDeleteTodo = (id: string) => {
        const newTodo = todos.filter((todo) => todo.id !== id);
        setTodos(newTodo);
    }

    const handleCheckTodo = (id: string) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, isCompleted: !todo.isCompleted }
                }
                return todo;
            })
        );
    };

    return (
        <>
            {todos && (
                <ul className={"todo-list"}>
                    {filterTodos.map(({ todo, isCompleted, id }) => (
                        <li key={id} className={"todo-item"}>
                            <div className="checkbox-name">
                                <input type="checkbox" checked={isCompleted} onChange={() => handleCheckTodo(id)} />
                                <p className={isCompleted ? "is completed" : ""}>{todo}</p>
                            </div>
                            <button onClick={() => handleDeleteTodo(id)}>
                                <img src="/image/icon-cross.svg" alt="delete-cross" />
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};
