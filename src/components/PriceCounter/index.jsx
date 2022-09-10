import styles from './styles.module.css'
import global from '../../styles/global.module.css'

export function PriceCounter(props) {
    return (
        <p className={`${global.preçoTelaProduto} ${global.blueGray}`}>
            R$ { props.cart.length > 1 ?
                props.cart.reduce((amount, current, idx) => {
                    if(idx == 1) return amount.price*amount.quantity + current.price*current.quantity
                    return amount + current.price*current.quantity
                }).toFixed(2).replace(".",",") :
                props.cart[0].price * props.cart[0].quantity
            }
        </p>
    ) 
}