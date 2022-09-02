import styles from './styles.module.css'
import global from '../../styles/global.module.css'
import { BotãoCard } from '../../components/BotãoCard/BotãoCard'

export function Card(props) {
    return (
        <div className={styles.Card}>
            <img src={props.link} alt="" />
            <p className={global.medium10}>{props.nome}</p>
            <p className={global.h2}>R$ {props.valor}</p>
            {<BotãoCard /* id={props.id}*/ content="Comprar" />}
        </div>
    )
}