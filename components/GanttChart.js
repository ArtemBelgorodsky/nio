import React from 'react';

function GanttChart({ tasks }) {
    return (
        <div className="gantt-chart">
            <table>
                <thead>
                <tr>
                    <th>Задача </th>
                    <th>Исследователь</th>
                    <th>Процесс выполнения</th>
                </tr>
                </thead>
                <tbody>
                {tasks.map(task => (
                    <tr key={task.id}>
                        <td>{task.title}</td>
                        <td>{task.researcher}</td>
                        <td>
                            <div className="gantt-bar" style={{ width: `${task.duration}%` }}></div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default GanttChart;