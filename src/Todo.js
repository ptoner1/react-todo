import React, { useState } from 'react';
import './TodoList.css';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export default function Todo(props) {
    const { todo, i, todos, setTodos } = props;

    const [editing, edit] = useState(false);
    const [input, setInput] = useState(todo)


    function handleEdit(e) {
        e.preventDefault();
        let newTodos = [...todos];
        newTodos.splice(i, 1, input);
        setTodos(newTodos)
        edit(false)
    }

    const editForm = (
        <form className='edit-form' onSubmit={handleEdit}>
            <input className='input edit-input' value={input} onChange={e => setInput(e.target.value)} placeholder='add todo' />
            <button className='submit-button' type='submit'>save</button>
        </form>
    )

    // making the todo sortable:
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({ id: todo });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

    const TodoSpan = (
        <span className='todo-span' {...listeners}>
            {todo}
        </span>
    )

    return (
        <div className='todo-container' ref={setNodeRef} style={style} {...attributes}>

            {editing ? editForm : TodoSpan}
            <div className='icons'>
                <img className='edit' src='/basic_todolist_pencil.png' alt='edit' onClick={() => { edit(!editing); setInput(todo) }} />
                <img className='trashcan' src='/basic_trashcan.png' alt='delete' onClick={() => props.handleDelete(todo)} />
            </div>
        </div>
    )
}
