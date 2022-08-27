import styles from './styles.module.css'
import global from '../../styles/global.module.css'

export function Card() {
    return (
        <div className={styles.Card}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/37/Ritalina.JPG" alt="" />
            <p className={global.medium14}>Nome do item nome do item nome do item</p>
            <p className={global.h2}>R$ 19,90</p>
            <button className={global.medium14}>COMPRAR</button>
        </div>
    )
}