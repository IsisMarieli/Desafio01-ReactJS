import styles from './Header.module.css';
import logoTodo from '../assets/Logo.svg';
import plus from '../assets/plus.svg'

export function Header(){
    return(
    <header className={styles.header}>
        <img className={styles.logo} src={logoTodo} alt="Logotipo do toDO List" />
        <div className={styles.addTask}>
            <input type="text" placeholder='Adicione uma nova tarefa' />
            <button>Criar <img src={plus} alt="icon plus" /></button>
        </div>
    </header>
    );
}