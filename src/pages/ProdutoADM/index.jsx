import '../ProdutoADM/styles.module.css'
import global from '../../styles/global.module.css'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { Produto } from '../../components/Produto/Produto'

export function ProdutoADM() {
    return (
        <div className='container'>
            <Header />
            <section>
                <Produto />
                <div>
                    <form action="" id='areaForm'>
                        <div>
                            <label htmlFor="produtoNome" className={global.semibold15}>
                                Nome do produto
                            </label>
                            <br />
                            <input type="text" id='produtoNome' />
                            <br />
                            <label htmlFor="produtoDescricao" className={global.semibold15}>
                                Descrição do Produto
                            </label>
                            <br />
                            <textarea name="" id="produtoDescricao" cols="30" rows="7" ></textarea>
                        </div>
                        <div>
                            <label htmlFor="produtoQuant" className={global.semibold15}>
                                Estoque
                            </label>
                            <input type="number" name="" id="produtoQuant" />
                            <br />
                            <label htmlFor="produtoPreco" className={global.semibold15} >
                                Preço por item
                            </label>
                            <input type="number" name="" id="produtoQuant" />
                        </div>
                        <button id='botaoAtualizaEstoque'>
                            Atualizar Produto
                        </button>
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    )
}