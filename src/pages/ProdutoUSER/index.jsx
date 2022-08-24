import '../ProdutoUSER/styles.css'
import '../../styles/global.css'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { Produto } from '../../components/Produto/Produto'

export function ProdutoUSER() {
    return (
        <div className='container'>
            <Header />
            <section>
                <Produto />
                <div>
                    <div className='semibold15' >Nome do produto</div>;
                    <div className='regular14'>descrição do produtdo descrição do produtdo descrição do produtdo descrição do produtdo descrição do produtdo descrição do produtdo descrição do produtdo descrição do produtdo descrição do produtdo descrição do produtdo</div>
                    <div></div>
                    <label htmlFor="quantidadeItem" id=''>Quantidade</label>
                    <input type="number" id='quantidadeItem' />
                    <div id='preçoItem' className='preçoTelaProduto'>19,90</div>
                    <button id="adicionaCesta">Adicionar à Cesta</button>
                </div>
            </section>
            <Footer />
        </div>
    )
}