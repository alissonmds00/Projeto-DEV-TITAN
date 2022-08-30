import styles from './styles.module.css'
import global from '../../styles/global.module.css'

export function Botão(props) {
    return (
        <div>
            <button name={props.name} className={`${styles.button} ${global.h2}`}>
                {props.content}
            </button>
        </div>
    )
}