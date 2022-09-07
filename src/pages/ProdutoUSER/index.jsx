import '../ProdutoUSER/styles.module.css'
import styles from './styles.module.css'
import global from '../../styles/global.module.css'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { Produto } from '../../components/Produto/Produto'
import { Botão } from '../../components/Botão/Botão'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import starting from '../../functions/starting'

export function ProdutoUSER() {
    const { id } = useParams()

    const [product, setProduct] = useState({
        id: 3,
        name: "Dipitona Monoidratada 1000mg",
        price: 2,
        image: "https://www.drogariaminasbrasil.com.br/media/product/311/dipirona-monoidratada-500mg-com-30-comprimidos-generico-prati-donaduzzi-4c8.jpg",
        description: "Teste Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi reprehenderit possimus repellendus placeat harum distinctio aliquid vero explicabo.",
        stock: 11,
    })

    useEffect(async () => {
        // tempProduct = await axios.get(`http://localhost:8000/products/${id}`)
        // setProduct(tempProduct)
        starting()
    }, [])

    return (
        <div className='container'>
            <Header />
            <section className={styles.section}>
                <Produto />
                <div>
                    <div className={global.semibold15}>
                        {id}
                    </div>
                    <div>
                        Disponível: {product.stock}
                        {product.stock < 10 && <p> Estoque Baixo </p>}
                    </div>
                    <div className={global.regular14}>
                        {product.description}
                    </div>
                    <label htmlFor="quantidadeItem">
                        Quantidade
                    </label>
                    <input type="number" id='quantidadeItem' />
                    <div id='preçoItem' className='preçoTelaProduto'>
                        R$ {product.price.toFixed(2).replace(".",",")}
                    </div>
                    <Botão content="Adicionar à Cesta" />
                </div>
            </section>
            <Footer />
        </div>
    )
}