import styles from '../../components/ProdutoADM/styles.module.css'
import global from '../../styles/global.module.css'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { Produto } from '../../components/Produto/Produto'
import { Botão } from '../../components/Botão/Botão'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import starting from '../../functions/starting'

export const NovoProduto = () => {
    const [produtoNome, setProdutoNome] = useState('')
    const [produtoDesc, setProdutoDesc] = useState('')
    const [produtoValor, setProdutoValor] = useState(0)
    const [produtoQuantidade, setProdutoQuantidade] = useState(0)
    const [produtoImagem, setProdutoImagem] = useState('')

    useEffect(() => {
        starting()
    }, [])

    function adicionarProduto(e) {
        e.preventDefault()
        axios.post(`${import.meta.env.VITE_API}/products/register`, {
            name:  produtoNome,
            price:  produtoValor,
            image: produtoImagem,
            description:  produtoDesc,
            stock:  produtoQuantidade
        })
        .then(r => 
            alert(r.data)
        )
        .then(() => {
            setProdutoNome('')
            setProdutoDesc('')
            setProdutoValor(0)
            setProdutoQuantidade(0)
            setProdutoImagem('')
        })
        .catch(e => 
            alert(e.response ? e.response.data : e)
        )
    }
    return (
        <div className='container'>
            <Header />
            <section className={styles.section}>
                <Produto img={ produtoImagem } />
                <div>
                    <form onSubmit={adicionarProduto} name='areaForm'>
                        <div>
                            <label htmlFor="produtoNome" className={global.semibold15}>
                                Nome do produto
                            </label>
                            <br />
                            <input type="text" name='produtoNome' value={produtoNome} onChange={(e) => setProdutoNome(e.target.value)} />
                            <br />
                            <label htmlFor="produtoIMG" className={global.semibold15}>
                                Imagem do produto
                            </label>
                            <br />
                            <input type="url" name='produtoIMG' value={produtoImagem} onChange={(e) => setProdutoImagem(e.target.value)} />
                            <br />
                            <label htmlFor="produtoDescricao" className={global.semibold15}>
                                Descrição do Produto
                            </label>
                            <br />
                            <textarea name="produtoDescricao" id="produtoDescricao" cols="30" rows="7" value={(produtoDesc)} onChange={(e) => setProdutoDesc(e.target.value)}></textarea>
                        </div>
                        <div>
                            <label htmlFor="produtoQuant" className={global.semibold15}>
                                Estoque
                            </label>
                            <input type="number" name="produtoQuant" id="produtoQuant" value={produtoQuantidade} onChange={(e) => setProdutoQuantidade(parseFloat(e.target.value))} />
                            <br />
                            <label htmlFor="produtoPreco" className={global.semibold15} >
                                Preço Unitário
                            </label>
                            <input type="number" name="produtoPreco" id="produtoPreco" step='0.01' className={styles.inputNumber} value={produtoValor} onChange={(e) => setProdutoValor(parseFloat(e.target.value))} />
                            <label htmlFor="">
                            </label>
                        </div>
                        <Botão content="Adicionar Produto" />
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    )
}