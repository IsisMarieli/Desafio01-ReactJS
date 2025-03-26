import styles from './Header.module.css';
import logoTodo from '../assets/Logo.svg';

export function Header(){
    return(
    <header className={styles.header}>
        <img src={logoTodo} alt="Logotipo do toDO List" />
        <input type="text" placeholder='Adicione uma nova tarefa' />
    </header>
    );
}