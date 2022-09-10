import styles from '../Cart/styles.module.css'
import global from '../../styles/global.module.css'
import imgCesta from '../../assets/cesta_final.svg'
import axios from 'axios'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { ItemCart } from '../../components/ItemCart/ItemCart'
import { Botão } from '../../components/Botão/Botão'
import { useEffect, useState } from 'react'
import starting from '../../functions/starting'
import store from '../../store'
import { PriceCounter } from '../../components/PriceCounter'

export function Cart() {

    const [user, setUser] = useState(store.getState().user)
  
    const [cart, setCart] = useState([])

    store.subscribe(() => setUser(store.getState().user))

    useEffect(() => {
        starting()
    }, [])

    useEffect(() => {
        if(user) {
            axios.get(`${import.meta.env.VITE_API}/cart/${user.id}`)
                .then(response => setCart(response.data)) 
                .catch(e => alert(e))
        }
    }, [user])

    function deletar(product_id){
        axios.delete(`${import.meta.env.VITE_API}/cart/delete/${user.id}/${product_id}`)
            .then(response => setCart(response.data))
            .then(() => {store.dispatch({type: 'update'})})
            .catch(e => alert(e))
    }

    function comprar(user_id){
        axios.patch(`${import.meta.env.VITE_API}/cart/buy/${user.id}`)
        .then(response => {
            alert(response.data)
            setCart([])
        })
        .catch(e => alert(e.response ? e.response.data : e))
    }

    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                <div>
                    <article className={styles.areaItens}>
                        <h2 className={`${global.h2}`}>
                            Sua Cesta de Compras
                        </h2>
                        <div>
                            {cart.length > 0 ?
                            cart.map((itemCart) =>
                                <ItemCart
                                    image={itemCart.image}
                                    name={itemCart.name}
                                    price={itemCart.price.toFixed(2).replace(".",",")}
                                    quantity={itemCart.quantity}
                                    description={itemCart.description}
                                    onClick={() => deletar(itemCart.id)}
                                    key={itemCart.id}
                                />
                            ) :
                            <p>Parece que você ainda não tem produtos no carrinho, vá às compras imediatamente para resolver esse problema!</p>
                            }
                        </div>
                    </article>
                </div>
                <div>
                    {cart.length > 0 && 
                    <div>
                        <h3 className={`${global.h3} ${global.darkGray}`}>TOTAL DA COMPRA</h3>
                        <PriceCounter cart={cart}/>
                        <Botão
                            onClick={comprar}
                            content='Finalizar Compra'
                        // Enviar pro backend o cart do usuário
                        />
                    </div>
                    }
                    <img className={styles.imgCesta} src={imgCesta} />
                </div>
            </main>
            <Footer />
        </div>
    )
}