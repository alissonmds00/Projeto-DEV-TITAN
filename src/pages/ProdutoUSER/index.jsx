import '../ProdutoUSER/styles.module.css'
import styles from './styles.module.css'
import global from '../../styles/global.module.css'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { Produto } from '../../components/Produto/Produto'

export function ProdutoUSER() {
    return (
        <div className='container'>
            <Header />
            <section className={styles.section}>
                <Produto />
                <div>
                    <div className={global.semibold15}>
                        Nome do produto
                    </div>
                    <div className={global.regular14}>
                        descrição do produtdo descrição do produtdo descrição do produtdo descrição do produtdo descrição do produtdo descrição do produtdo descrição do produtdo descrição do produtdo descrição do produtdo descrição do produtdo
                    </div>
                    <label htmlFor="quantidadeItem">
                        Quantidade
                    </label>
                    <input type="number" id='quantidadeItem' />
                    <div id='preçoItem' className='preçoTelaProduto'>
                        19,90
                    </div>
                    <button id="adicionaCesta">
                        Adicionar à Cesta
                    </button>
                </div>
            </section>
            <Footer />
        </div>
    )
}