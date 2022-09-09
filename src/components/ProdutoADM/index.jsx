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
import { useParams } from 'react-router-dom'

export const ProdutoADM = () => {
    const { id } = useParams()
    const [produtoNome, setProdutoNome] = useState('')
    const [produtoDesc, setProdutoDesc] = useState('')
    const [produtoValor, setProdutoValor] = useState()
    const [produtoQuantidade, setProdutoQuantidade] = useState()
    const [produtoImagem, setProdutoImagem] = useState('')

    const [product, setProduct] = useState({
        id: 3,
        name: "Dipirona Monoidratada 1000mg",
        price: 2,
        image: "https://www.drogariaminasbrasil.com.br/media/product/311/dipirona-monoidratada-500mg-com-30-comprimidos-generico-prati-donaduzzi-4c8.jpg",
        description: "Teste Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi reprehenderit possimus repellendus placeat harum distinctio aliquid vero explicabo.",
        stock: 5,
    })

    useEffect(() => {
        // tempProduct = await axios.get(`http://localhost:8000/products/${id}`)
        // setProduct(tempProduct)
    }, [])

    function atualizarProduto() {
        axios.post(`http://localhost:8000/products/${id}`, {
            nome: { produtoNome },
            price: { produtoValor },
            image: { produtoImagem },
            description: { produtoDesc },
            stock: { produtoStock }
        })
    }
    return (
        <div className='container'>
            <Header />
            <section className={styles.section}>
                <div>
                    <Produto img={produtoImagem} />
                    <div>
                        <form onSubmit={atualizarProduto} name='areaForm'>
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
                </div>
            </section>
            <Footer />
        </div>
    )
}