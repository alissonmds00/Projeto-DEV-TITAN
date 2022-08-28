import styles from './styles.module.css'
import global from '../../styles/global.module.css'

export function Card(props) {
    return (
        <div className={styles.Card}>
            <img src={props.link} alt="" />
            <p className={global.medium10}>{props.nome}</p>
            <p className={global.h2}>R$ {props.valor}</p>
            <button className={global.medium10}>COMPRAR</button>
        </div>
    )
}