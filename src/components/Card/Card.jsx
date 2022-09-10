import styles from './styles.module.css'
import global from '../../styles/global.module.css'
import { BotãoCard } from '../../components/BotãoCard/BotãoCard'
import stars from '../../assets/stars.svg'

export function Card(props) {
    return (
        <div className={styles.Card}>
            <img src={props.image}  alt="" />
            <div>
            <img src={stars} alt="" />
            </div>
            <p className={`${global.semibold15} ${global.darkGray}`}>{props.name}</p>
            <p className={global.h2}>R$ {props.price.toFixed(2).replace(".",",")}</p>
            {<BotãoCard id={props.id} content={props.content} />}
        </div>
    )
}