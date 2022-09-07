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
import store from '../../store'

export function ProdutoUSER() {
    const { id } = useParams()

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
        starting()
    }, [])

    return (
        <div className='container'>
            <Header />
            <section className={styles.section}>
                <div>
                    <Produto />
                    <div>
                        <div className={`${global.semibold15} ${global.darkGray}`}>
                            {product.name}
                        </div>
                        <div className={`${global.regular14} ${global.darkGray}`}>
                            Disponível: {product.stock}
                            {product.stock < 10 && <p className={`${global.semibold15} ${global.red}`}> Aproveite agora! Estoque Baixo!</p>}
                        </div>
                        <div className={global.regular14}>
                            {product.description}
                        </div>
                        <div className={`${global.regular14} ${global.darkGray}`}>
                            <label htmlFor="quantidadeItem">
                                Quantidade
                            </label>
                            <input type="number" id='quantidadeItem' className={styles.inputNumber}/>
                        </div>
                        <div id='preçoItem' className={`${global.preçoTelaProduto} ${global.blueGray}`}>
                            R$ {product.price.toFixed(2).replace(".", ",")}
                        </div>
                        <Botão onClick={() => {}} content="Adicionar à Cesta" />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}