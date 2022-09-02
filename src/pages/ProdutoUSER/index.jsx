import '../ProdutoUSER/styles.module.css'
import styles from './styles.module.css'
import global from '../../styles/global.module.css'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { Produto } from '../../components/Produto/Produto'
import { Botão } from '../../components/Botão/Botão'
import { useEffect } from 'react'
import { useState } from 'react'
// import { useParams } from 'react-router-dom'

export function ProdutoUSER() {
    // const { id } = useParams()

    // const [product, setProduct] = useState({})

    // // useEffect(async () => {
    // //     tempProduct = await axios.get(`http://localhost:8000/product/${id}`)
    // //     setProduct(tempProduct)
    // // }
    // // )

    return (
        <div className='container'>
            <Header />
            <section className={styles.section}>
                <Produto />
                <div>
                    <div className={global.semibold15}>
                        Nome
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
                    <Botão content="Adicionar à Cesta" />
                </div>
            </section>
            <Footer />
        </div>
    )
}