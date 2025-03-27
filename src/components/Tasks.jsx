import styles from './Tasks.module.css';
import clipboard from '../assets/Clipboard.svg';
import { Trash } from '@phosphor-icons/react';


export function Tasks({ tasks }) {

    const totalTasks = tasks.length;
    const completedTasks = 0;

    return (
        <div>
            <div className={styles.inforTasks}>
                <p className={styles.taskCreated}>Tarefas criadas <span>{totalTasks}</span></p>
                <p className={styles.taskCompleted}>Concluídas <span>{completedTasks} de {totalTasks}</span></p>
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
                        {tasks.map((task, tasks) => (
                            <li key={tasks}>
                                <input className={styles.checkBox} type="checkbox" />
                                {task} 
                                <button className={styles.Trash}>
                                    <Trash  size={15} />
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}
