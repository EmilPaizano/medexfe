import { useDispatch, useSelector } from "react-redux"
import Todos from "./Todos"

const TodoPage=()=>{
    //SELECCIONA EL REDUCER CREADO EN INDEX DE TODO
    //                          EN ESTA PARTE NOS SUSCRIBIMOS ESPECIFICAMENTE
    //                          A ESE ELEMENTO "todos" DE LA STORE
    const todos =  useSelector(({todos})=>{return todos}); 
    const dispatch = useDispatch();
    const onAddTodo = (todoMessage)=>{
        const action = {
            type:"ADD_TODO_MESSAGE",
            payload:{
                msg:todoMessage
            }
        }
        dispatch(action);
    }
    const onToggleDone = (idTodo)=>{
        console.log('onToggleDone',idTodo)
        const toggleTodo = {
            type:"TOGGLE_TODO_MESSAGE",
            payload:{
                id:idTodo
            }
        };
        dispatch(toggleTodo);
    }

    return(
        <Todos
            list={Object.entries(todos.list)}
            onAddTodo={onAddTodo}
            onToggleDone={onToggleDone}
        />
    )
}
export default TodoPage;