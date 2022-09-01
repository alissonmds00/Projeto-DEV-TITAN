import styles from '../Cart/styles.module.css'
import global from '../../styles/global.module.css'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { ItemCart } from '../../components/ItemCart/ItemCart'
import { Botão } from '../../components/Botão/Botão'
import imgCesta from '../../assets/cesta_final.svg'

export function Cart() {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                <div>
                    <article className={styles.areaItens}>
                        <h2 className={`${global.h2}`}>
                            Sua Cesta de Compras
                        </h2>
                        <div>
                            <ItemCart />
                            <ItemCart />
                            <ItemCart />
                            <ItemCart />
                            <ItemCart />
                            <ItemCart />
                            <ItemCart />
                            <ItemCart />
                            <ItemCart />
                        </div>
                    </article>
                </div>
                <div>
                    <div>
                        <h3 className={`${global.h3} ${global.darkGray}`}>TOTAL DA COMPRA</h3>
                        <p className={`${global.preçoTelaProduto} ${global.blueGray}`}> R${/*INSERIR VARIÁVEL DO VALOR TOTAL*/}</p>
                        <Botão content='Finalizar Compra' />
                    </div>
                    <img className={styles.imgCesta} src={imgCesta} />
                </div>
            </main>
            <Footer />
        </div>
    )
}