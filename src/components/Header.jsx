import { useState } from 'react';
import styles from './Header.module.css';
import logoTodo from '../assets/Logo.svg';
import plus from '../assets/plus.svg';

export function Header({ onAddTask }) {

    const [newTask, setNewTask] = useState('');

    function handleCreateNewTask(event) {
        event.preventDefault();
        onAddTask(newTask); 
        setNewTask('');
    }

    function handleNewTaskChange(event) { 
        event.target.setCustomValidity('');
        setNewTask(event.target.value);
    }

    function handleNewTaskInvalid(event) {
        event.target.setCustomValidity('Cadastre uma tarefa!');
    }

    return (
        <header className={styles.header}>
            <img className={styles.logo} src={logoTodo} alt="Logotipo do toDO List" />
            <div className={styles.addTask}>
                <form onSubmit={handleCreateNewTask} className={styles.taskForm}>
                    <textarea
                        name="task"
                        placeholder="Adicione uma nova tarefa"
                        value={newTask}
                        onChange={handleNewTaskChange}
                        onInvalid={handleNewTaskInvalid}
                        required
                    />
                <button type='submit'>
                        Criar <img src={plus} alt="icon plus" />
                </button>
                </form>
            </div>
        </header>
    );
}
