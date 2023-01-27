import { DndContext, closestCenter } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import React from 'react';
import Todo from './Todo';
import './TodoList.css';

export default function TodoList(props) {

    const { todos, setTodos } = props;

    function handleDelete(todo) {
        let newTodos = props.todos.filter(t => t != todo)
        props.setTodos(newTodos)
    }

    return (
        <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
        >
            <div className='todo-list'>
                <SortableContext
                    items={todos}
                    strategy={verticalListSortingStrategy}
                >
                    {todos.map((todo, i) => {
                        return <Todo key={todo} i={i} id={todo} todo={todo} todos={todos} setTodos={setTodos} handleDelete={handleDelete} />
                    })}
                </SortableContext>
            </div>
        </DndContext>
    )

    // resort the todo array on mouseUp event
    function handleDragEnd(e) {
        const { active, over } = e;

        if (active.id !== over.id) {
            setTodos((items) => {
                const activeIndex = items.indexOf(active.id);
                const overIndex = items.indexOf(over.id);
                return arrayMove(items, activeIndex, overIndex);
            })
        }
    }
}
