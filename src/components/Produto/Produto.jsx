import styles from './styles.module.css'

export function Produto(props) {
    return (
        <div className={styles.produtoIMG}>
            <img src={props.img} alt="" />
        </div>
    ) 
}