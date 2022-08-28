import styles from '../Cart/styles.module.css'
import global from '../../styles/global.module.css'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { ItemCart } from '../../components/ItemCart/ItemCart'

export function Cart() {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                <article className={styles.areaItens}>
                    <h3 className={`${global.h3} ${global.darkGray}`}>
                        Sua Cesta de Compras
                    </h3>
                    <div>
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
                <div>
                    <button>Finalizar Compra</button>
                    <img src="" alt="" />
                </div>
            </main>
            <Footer />
        </div>
    )
}