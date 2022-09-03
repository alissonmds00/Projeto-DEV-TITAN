import styles from '../ProdutoADM/styles.module.css'
import global from '../../styles/global.module.css'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { Produto } from '../../components/Produto/Produto'
import { Botão } from '../../components/Botão/Botão'
import axios from 'axios'
import { useState } from 'react'

export function ProdutoADM(props) {
    const [produtoNome, setProdutoNome] = useState('')
    const [produtoDesc, setProdutoDesc] = useState('')
    const [produtoValor, setProdutoValor] = useState(5)
    const [produtoQuantidade, setProdutoQuantidade] = useState(1)
    const [produtoImagem, setprodutoImagem] = useState('https://localhost/')


    function adicionarProduto() {
        axios.post('http://localhost:8000/products', {
            nome: { produtoNome },
            value: { produtoValor },
            image: {},
            description: { produtoDesc },
            quantity: { produtoQuantidade }
        })

    }
    return (
        <div className='container'>
            <Header />
            <section className={styles.section}>
                <Produto />
                <div>
                    <form onSubmit={adicionarProduto()} id='areaForm'>
                        <div>
                            <label htmlFor="produtoNome" className={global.semibold15}>
                                Nome do produto
                            </label>
                            <br />
                            <input type="text" name='produtoNome' id='produtoNome' onChange={setProdutoNome} />
                            <br />
                            <label htmlFor="produtoDescricao" className={global.semibold15}>
                                Descrição do Produto
                            </label>
                            <br />
                            <textarea name="produtoDescricao" id="produtoDescricao" cols="30" rows="7" value="" onChange={setProdutoDesc}></textarea>
                        </div>
                        <div>
                            <label htmlFor="produtoQuant" className={global.semibold15}>
                                Estoque
                            </label>
                            <input type="number" name="produtoQuant" id="produtoQuant" onChange={setProdutoQuantidade} />
                            <br />
                            <label htmlFor="produtoPreco" className={global.semibold15} >
                                Preço por item
                            </label>
                            <input type="number" name="produtoPreco" id="produtoPreco" min={1} className={styles.inputNumber} onChange={setProdutoValor} />
                        </div>
                        <Botão content="Atualizar Produto" />
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    )
}