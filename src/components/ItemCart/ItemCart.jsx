import styles from './styles.module.css'
import global from '../../styles/global.module.css'

export function ItemCart(props) {
    return (
        <div className={styles.container}>
            <div>
                <button onClick={props.onClick} className={styles.deletarItem} name='deletarItem'></button>
                <img src={props.image} width="65px" />
                <div className={`${styles.nomeProduto} ${global.semibold15} ${global.darkGray}`}>
                    {props.name}
                    <p className={`${styles.descProduto} ${global.regular14} ${global.legendasGray}`}>
                        Preço unit.: R$ {props.price}
                    </p>
                </div>
            </div>
            <p className={`${styles.nomeProduto} ${global.semibold15} ${global.darkGray}`}>
                Itens na cesta: {props.quantity}
            </p>
        </div>
    )
}