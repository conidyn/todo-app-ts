import {TodoMock} from '../types'

interface TodoListFooterProps {
    todos: TodoMock[];
    setFilterTodos: React.Dispatch<React.SetStateAction<TodoMock[]>>;
    setTodos: React.Dispatch<React.SetStateAction<TodoMock[]>>;
}

type VoidFn = () => void;

export const TodoListFooter = ({setFilterTodos, todos, setTodos }: TodoListFooterProps) => {
    const showAllTodos: VoidFn = () => setFilterTodos(todos);
    const showActiveTodos: VoidFn = () => setFilterTodos(todos.filter((todo) => todo.isCompleted === false));
    const showCompletedTodos: VoidFn = () => setFilterTodos(todos.filter((todo) => todo.isCompleted === true));
    const deleteCompletedTodos: VoidFn = () => setTodos(todos.filter((todo) => todo.isCompleted === false));

    const todosCompleted = todos.find((todos) => todos.isCompleted === true);
    const todosActive = todos.find((todos) => todos.isCompleted === false );

    const pluralizeText = (length: number) => (length <= 1 ? "" : "s")
    const RestItems = <p>{`${todos.length} item${pluralizeText(todos.length)} left`}</p>

    return (
        <div className='todo-footer'>
            {RestItems}
            <div>
                <button onClick={showAllTodos}>All</button>
                <button onClick={showActiveTodos} disabled={!todosActive}>Active</button>
                <button onClick={showCompletedTodos}>Completed</button>
            </div>
            <div>
                <button onClick={deleteCompletedTodos} disabled={!todosCompleted}>Clear completed</button>
            </div>
        </div>
    )
}


