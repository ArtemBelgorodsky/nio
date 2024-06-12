"use client"
import React, { useState } from 'react';
import Task from './Task';

function KanbanBoard() {
    const [tasks, setTasks] = useState([

        {
            id: 1,
            title: 'Исследование новых материалов',
            description: 'Необходимо изучить свойства новых материалов для использования в строительстве.',
            researcher: 'Иванов И.И.',
            status: 'inProgress'
        },
        {
            id: 2,
            title: 'Анализ рынка недвижимости',
            description: 'Провести анализ текущего состояния и перспектив развития рынка недвижимости.',
            researcher: 'Петров П.П.',
            status: 'toDo'
        },
        {
            id: 3,
            title: 'Разработка стратегии маркетинга',
            description: 'Разработать стратегию маркетинга для нового продукта.',
            researcher: 'Сидоров С.С.',
            status: 'toDo'
        },
        {
            id: 4,
            title: 'Тестирование программного обеспечения',
            description: 'Провести тестирование нового программного обеспечения на совместимость и производительность.',
            researcher: 'Кузнецов К.К.',
            status: 'inProgress'
        },
    ]);

    const assignResearcher = (taskId, researcher) => {
        setTasks(tasks.map(task => task.id === taskId ? { ...task, researcher } : task));
    };

    const moveTask = (taskId, newStatus) => {
        setTasks(tasks.map(task => task.id === taskId ? { ...task, status: newStatus } : task));
    };

    return (
        <div>
            <div className="kanban-columns">
                <div className="kanban-column">
                    <h2>Что нужно сделать</h2>
                    {tasks.map(task => task.status === 'toDo' && (
                        <Task key={task.id} task={task} onAssign={assignResearcher} onMove={moveTask} />
                    ))}
                </div>
                <div className="kanban-column">
                    <h2>В процессе</h2>
                    {tasks.map(task => task.status === 'inProgress' && (
                        <Task key={task.id} task={task} onAssign={assignResearcher} onMove={moveTask} />
                    ))}
                </div>
                <div className="kanban-column">
                    <h2>Завершено</h2>
                    {tasks.map(task => task.status === 'done' && (
                        <Task key={task.id} task={task} onAssign={assignResearcher} onMove={moveTask} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default KanbanBoard;