import styles from './styles.module.css'
import global from '../../styles/global.module.css'
import Delete from '../../assets/delete.svg'

export function ItemCart(props) {
    return (

        <div className={styles.container}>
            <button className={styles.deletarItem} name='deletarItem'></button>
            <img src={props.img} />
            <p className={`${styles.nomeProduto} ${global.semibold15} ${global.darkGray}`}>
                {props.nome}
            </p>
            <p className={`${styles.descProduto} ${global.regular14} ${global.legendasGray}`}>
                {props.preco}
            </p>

        </div>

    )
}