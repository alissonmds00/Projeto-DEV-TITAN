import styles from './styles.module.css'
import global from '../../styles/global.module.css'

export function BotãoCard(props) {
    return (
        <div>
            <button name={props.name} className={`${styles.button} ${global.semibold15}`}>
                {props.content}
            </button>
        </div>
    )
}