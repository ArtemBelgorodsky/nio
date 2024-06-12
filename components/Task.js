import React from 'react';
const researchers = [
    { id: 1, name: 'Иванов И.И.', department: 'Химия' },
    { id: 2, name: 'Петров П.П.', department: 'Информатика' },
    { id: 3, name: 'Сидоров С.С.', department: 'Физика' },
    { id: 4, name: 'Кузнецов К.К.', department: 'Биология' },
    { id: 5, name: 'Васильев В.В.', department: 'Математика' },
    { id: 6, name: 'Григорьев Г.Г.', department: 'Экономика' },
    { id: 7, name: 'Дмитриев Д.Д.', department: 'История' },
    { id: 8, name: 'Егоров Е.Е.', department: 'Литература' },
    { id: 9, name: 'Жуков Ж.Ж.', department: 'Искусствоведение' },
    { id: 10, name: 'Зайцев З.З.', department: 'Психология' }
];
function Task({ task, onAssign, onMove }) {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{task.title}</h5>
                <p className="card-text">{task.description}</p>
                <select onChange={(e) => onAssign(task.id, e.target.value)}>
                    <option value="">Выберите исследователя</option>
                    {researchers.map(researcher => (
                        <option key={researcher.id} value={researcher.name}>
                            {researcher.name} ({researcher.department})
                        </option>
                    ))}
                </select>
                <button onClick={() => onMove(task.id, 'inProgress')}>В процессе</button>
                <button onClick={() => onMove(task.id, 'done')}>Завершено</button>
            </div>
        </div>
    );
}

export default Task;