import React, { useState } from 'react';

export default function TodoForm(props) {

    const [input, setInput] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        if (input.length) {
            let newTodos = [...props.todos, input];
            props.setTodos(newTodos)
        }
        setInput('');
    }

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input className='input' value={input} onChange={e => setInput(e.target.value)} placeholder='add todo' />
            <button className='submit-button add-todo' type='submit'>Add</button>
        </form>
    )
}
