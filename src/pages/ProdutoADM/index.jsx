import styles from '../ProdutoADM/styles.module.css'
import global from '../../styles/global.module.css'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { Produto } from '../../components/Produto/Produto'
import { Botão } from '../../components/Botão/Botão'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import starting from '../../functions/starting'

export const ProdutoADM = () => {
    const [produtoNome, setProdutoNome] = useState('')
    const [produtoDesc, setProdutoDesc] = useState('')
    const [produtoValor, setProdutoValor] = useState()
    const [produtoQuantidade, setProdutoQuantidade] = useState()
    const [produtoImagem, setProdutoImagem] = useState('')

    useEffect(() => {
        starting()
    }, [])

    function adicionarProduto() {
        axios.post('http://localhost:8000/products', {
            nome: { produtoNome },
            price: { produtoValor },
            image: {produtoImagem},
            description: { produtoDesc },
            stock: { produtoStock }
        })
    }
    return (
        <div className='container'>
            <Header />
            <section className={styles.section}>
                <Produto />
                <div>
                    <form onSubmit={adicionarProduto} name='areaForm'>
                        <div>
                            <label htmlFor="produtoNome" className={global.semibold15}>
                                Nome do produto
                            </label>
                            <br />
                            <input type="text" name='produtoNome' value={produtoNome} onChange={(e) => [setProdutoNome(e.target.value), setError('')]} />
                            <br />
                            <label htmlFor="produtoIMG" className={global.semibold15}>
                                Imagem do produto
                            </label>
                            <br />
                            <input type="url" name='produtoIMG' value={produtoImagem} onChange={(e) => [setProdutoImagem(e.target.value), setError('')]} />
                            <br />
                            <label htmlFor="produtoDescricao" className={global.semibold15}>
                                Descrição do Produto
                            </label>
                            <br />
                            <textarea name="produtoDescricao" id="produtoDescricao" cols="30" rows="7" value={(produtoDesc)} onChange={(e) => [setProdutoDesc(e.target.value), setError('')]}></textarea>
                        </div>
                        <div>
                            <label htmlFor="produtoQuant" className={global.semibold15}>
                                Estoque
                            </label>
                            <input type="number" name="produtoQuant" id="produtoQuant" value={produtoQuantidade} onChange={(e) => [setProdutoQuantidade(e.target.value), setError('')]} />
                            <br />
                            <label htmlFor="produtoPreco" className={global.semibold15} >
                                Preço Unitário
                            </label>
                            <input type="number" name="produtoPreco" id="produtoPreco" min={1} className={styles.inputNumber} value={produtoValor} onChange={(e) => [setProdutoValor(e.target.value), setError('')]} />
                        </div>
                        <Botão content="Atualizar Produto" />
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    )
}