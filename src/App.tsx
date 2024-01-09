
import { useEffect, useState } from "react";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { TodoMock } from "./types";
import { todoMock } from "./mocks/todo-mock";
import { TodoListFooter } from "./components/TodoListFooter";



export const App = () => {

  const [todos, setTodos] = useState<TodoMock[] | []>(todoMock);
  const [filterTodos, setFilterTodos] = useState<TodoMock[] | []>(todos)

  useEffect(() => {
    // Le composant est monté, après le premier rendu, le useEffect se déclenche
    setFilterTodos(todos);
    // On passe une dépendence, le useEffect surveille le state "todos". si il est modifié, le useEffect se redéclenche et réexucte toute sa logique
    // return () => {
      // Nettoyer l'effet de bord ( souvent avec les timeOut, timeInterval)
    // }
  }, [todos]);

  return (
    <div className="App">
      <header>
        <h1>Coni Todo List </h1>
      </header>
      <div>
        <AddTodo todos={todos} setTodos={setTodos} />
        <div>
          <TodoList todos={todos} setTodos={setTodos} filterTodos={filterTodos} />
          <TodoListFooter todos={todos} setFilterTodos={setFilterTodos} setTodos={setTodos} />
        </div>
      </div>
    </div>
  );
};
