import { useState } from "react";
import { PrimaryButton } from "../../UX/Forms/Button";
import Input from "../../UX/Forms/Input";
import Page from "../../UX/Page/Page"

const Todos = ({
    list,
    onAddTodo,
    onToggleDone,

})=>{
    return(
        <Page header={(<h1>ToDo List</h1>)}>
            <TodoAddForm addTodo={onAddTodo}></TodoAddForm>
            <TodoFormList todoFormList={list} toggleTodo={onToggleDone}></TodoFormList>
        </Page>
    );
}
//FORMULARIO
const TodoAddForm = ({addTodo})=>{
    const [todoMessage,setTodoMessage] = useState();
    const onChange = (e) =>{
        const {value} = e.target;
        setTodoMessage(value);
    }
    const onAddClick = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        addTodo(todoMessage)
        console.log(todoMessage)
        setTodoMessage('');
    }
    return(
        <>
            <Input
            type="text"
            name="txtTodoText"
            placeholder="A Todo Text Message"
            label="A Todo Text Message"
            onChange={onChange}
            value={todoMessage}
            />
            <PrimaryButton onClick={onAddClick}>Add</PrimaryButton>
        </>

    )
}
//CREACION DE LA LISTA DE NOTAS
const TodoFormList = ({todoFormList, toggleTodo}) =>{
    
    const formItems = (todoFormList || []).map(([key, {msg,done}],i)=>{
        //console.log([key, {msg,done}]) La estructura de todoFormList es la de un arreglo de diccionarios
        return(<TodoFormListItem key={key} id={key} onToggleDone={toggleTodo} done={done}>{msg}</TodoFormListItem>);
    })
    return(
        <ul>
            {formItems}
        </ul>
    )
}
//COMPONENTE DE ELEMENTOS A LISTAR
//ON TOGGLE DONE ES EEL EVENTO QUE FINALIZA SU TRAVESIA EN ESTE COMPONENTE,
//QUE AL REALIZAR UN CLICK SOBRE EL TACHARA EL ELEMENTO DE LA LISTA DE TODOS
const TodoFormListItem = ({onToggleDone,id,done,children})=>{
    const style = {textDecoration:((done)?"Line-through":"none")}
    return(
        <li 
            onClick={(e)=>{
                e.preventDefault();
                e.stopPropagation();
                onToggleDone(id);
            }}
            style={style}
        >
            {children}
        </li>
    )
}

export default Todos;