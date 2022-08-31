import styles from '../Cart/styles.module.css'
import global from '../../styles/global.module.css'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { ItemCart } from '../../components/ItemCart/ItemCart'
import { Botão } from '../../components/Botão/Botão'

export function Cart() {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                <div>
                    <h2 className={`${global.h2}`}>
                        Sua Cesta de Compras
                    </h2>
                    <article className={styles.areaItens}>
                        <div>
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
                    <Botão content='Finalizar Compra' />
                </div>
            </main>
            <Footer />
        </div>
    )
}