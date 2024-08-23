import { useEffect, useState } from "react";
import { TodoProps } from "../../@types/todo";
import CriarTodo from "../../components/criarTodo";
import TodoList from "../../components/todolist";


function Todo() {
const [getTodos, setTodos] = useState<TodoProps[]>([]);

  useEffect(() => {
    console.log({getTodos})
  }, [getTodos]);

  const tratarCriacaoDeTarefas = (titulo: string) => {
    const id: number = getTodos.length + 1;
    const tarefa: TodoProps = { id, titulo };

    const tmpTarefas: TodoProps[] = [...getTodos, tarefa];
    setTodos(tmpTarefas);
  }

  return (
    <div>
        <CriarTodo onEnviar={(titulo: string) => 
            tratarCriacaoDeTarefas(titulo)}/>
        <TodoList
            todos={getTodos}
            onChange={(newTodoList: TodoProps[]) => setTodos(newTodoList)}
        />
    </div>
  )
}

export default Todo;