import { useState } from 'react';
import styles from './Tasks.module.css';
import { Trash } from '@phosphor-icons/react';
import clipboard from '../assets/Clipboard.svg';

export function Tasks({ tasks }) {
    const [completedTasks, setCompletedTasks] = useState([]);

    const handleToggleTask = (task) => {
        setCompletedTasks(prev => 
            prev.includes(task) ? prev.filter(t => t !== task) : [...prev, task] 
        );
    };

    const totalTasks = tasks.length;
    const completedCount = completedTasks.length;

    return (
        <div>
            <div className={styles.inforTasks}>
                <p className={styles.taskCreated}>
                    Tarefas criadas <span>{totalTasks}</span>
                </p>
                <p className={styles.taskCompleted}>
                    Concluídas <span>{completedCount} de {totalTasks}</span>
                </p>
            </div>

            {totalTasks === 0 ? (
                <div className={styles.taskEmpity}>
                    <img src={clipboard} alt="ClipBoard" />
                    <p>
                        <span>Você ainda não tem tarefas cadastradas</span>
                        Crie tarefas e organize seus itens a fazer
                    </p>
                </div>
            ) : (
                <div className={styles.listTasks}>
                    <ul>
                        {tasks.map((task) => (
                            <li 
                                key={task} 
                                className={completedTasks.includes(task) ? styles.fullCompleted : ""}
                            >
                                <input 
                                    className={styles.checkBox} 
                                    type="checkbox" 
                                    onChange={() => handleToggleTask(task)} 
                                />
                                {task}
                                <button className={styles.Trash}>
                                    <Trash size={15} />
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
