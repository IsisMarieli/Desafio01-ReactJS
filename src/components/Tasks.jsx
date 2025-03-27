import styles from './Tasks.module.css';
import clipboard from '../assets/Clipboard.svg';

export function Tasks() {
    return(
        <div>
        <div className={styles.inforTasks}>
            <p className={styles.taskCreated}>Tarefas criadas <span>0</span></p>
            <p className={styles.taskCompleted}>Concluídas <span>0</span></p>
        </div>
        <div className={styles.taskEmpity}>
            <img src={clipboard} alt="ClipBoard" />
            <p>
                <span>Você ainda não tem tarefas cadastradas</span>
                Crie tarefas e organize seus itens a fazer
            </p>
        </div>
        </div>
    )
}