import './styles.module.css'
import styles from './styles.module.css'
import global from '../../styles/global.module.css'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { Produto } from '../Produto/Produto'
import { Botão } from '../Botão/Botão'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import starting from '../../functions/starting'
import store from '../../store'
import axios from 'axios'

export function ProdutoUSER() {
    const { id } = useParams()

    const [product, setProduct] = useState({})

    const [user, setUser] = useState(store.getState().user)

    const [quantity, setQuantity] = useState(1)

    store.subscribe(() => setUser(store.getState().user))

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API}/products/${id}`)
            .then(response => setProduct(response.data)) 
            .catch(e => alert(e.response ? e.response.data : e))
    }, [])

    useEffect(() => {
        starting()
    }, [])

    function addToCart(user) {
        if(quantity > 0){
            axios.post(`${import.meta.env.VITE_API}/cart/register/${user.id}`, {id: id, quantity: quantity})
                .then(response => alert(response.data)) 
                .catch(e => alert(e.response ? e.response.data : e))
        } else {alert('Não é possível adicionar menos que 1 unidade ao carrinho.')}
    }

    return (
        <div className={styles.container}>
            <Header />
            <section className={styles.section}>
                <div>
                    <Produto img={ product.image } />
                    <div>
                        <div className={`${global.semibold15} ${global.darkGray}`}>
                            {product.name}
                        </div>
                        <div className={global.regular14}>
                            {product.description}
                        </div>
                        <div className={`${global.regular14} ${global.darkGray}`}>
                            Disponível: {product.stock}
                            {product.stock < 10 && <p className={`${global.semibold15} ${global.red}`}> Aproveite agora! Estoque Baixo!</p>}
                        </div>
                        <div className={`${global.regular14} ${global.darkGray}`}>
                            <label htmlFor="quantidadeItem">
                                Quantidade
                            </label>
                            <input type="number" id='quantidadeItem' className={styles.inputNumber} required value={quantity} onChange={e => setQuantity(parseFloat(e.target.value))}/>
                        </div>
                        <div id='preçoItem' className={`${global.preçoTelaProduto} ${global.blueGray}`}>
                            R$ {product.price ? product.price.toFixed(2).replace(".", ",") : '0,00'}
                        </div>
                        <Botão onClick={() => {addToCart(user)}} content="Adicionar à Cesta" />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}