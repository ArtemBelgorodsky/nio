import React from 'react';
import KanbanBoard from '../components/KanbanBoard';
import GanttChart from '../components/GanttChart';
const tasks = [
    {
        id: 1,
        title: 'Исследование новых материалов',
        description: 'Необходимо изучить свойства новых материалов для использования в строительстве.',
        researcher: 'Иванов И.И.',
        duration: 20 // Представлено в пикселях для диаграммы Гантта
    },
    {
        id: 4,
        title: 'Тестирование программного обеспечения',
        description: 'Провести тестирование нового программного обеспечения на совместимость и производительность.',
        researcher: 'Кузнецов К.К.',
        duration: 30
    },
];
export default function Home() {
    return (
        <div>
            <KanbanBoard />
            <GanttChart tasks={tasks}/>
        </div>
    );
}