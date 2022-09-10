import styles from './styles.module.css'

export function Produto(props) {
    return (
        <div id={styles.produtoIMG}>
            <img src={props.img} alt="" />
        </div>
    ) 
}