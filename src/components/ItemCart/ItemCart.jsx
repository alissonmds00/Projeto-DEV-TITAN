import styles from './styles.module.css'
import global from '../../styles/global.module.css'

export function ItemCart(props) {
    return (
        <div className={styles.container}>
            {/* OS TEXTOS E IMAGENS PROVISIÓRIOS SÃO APENAS PARA TER UMA BASE VISUAL, QUANDO EU AINDA ESTAVA FAZENDO O FRONT, E DEVEM SER RETIRADOS*/}
            <button className={styles.deletarItem} name='deletarItem'></button>
            <img src={props.img} /> <img src="https://img.freepik.com/vetores-premium/moldura-quadrada-de-luz-rosa-quadrado-de-luz-rosa-banner-quadrado-luz-rosa_1189-2997.jpg" width="50px" alt="" />
            <p className={`${styles.nomeProduto} ${global.semibold15} ${global.darkGray}`}>
                {props.nome} Nome do item nome do item
            </p>
            <p className={`${styles.descProduto} ${global.regular14} ${global.legendasGray}`}>
                {props.preco} R$ 20.20
            </p>
        </div>
    )
}