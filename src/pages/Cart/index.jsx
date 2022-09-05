import styles from '../Cart/styles.module.css'
import global from '../../styles/global.module.css'
import imgCesta from '../../assets/cesta_final.svg'
import axios from 'axios'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { ItemCart } from '../../components/ItemCart/ItemCart'
import { Botão } from '../../components/Botão/Botão'
import { useEffect, useState } from 'react'

export function Cart() {

    //  useEffect(async () => {
    //      let tempCart = await axios.get(`http://localhost:8000/users/id`)
    //      setCart(tempCart)

    //  })

    const [cart, setCart] = useState(
        [
            {
                id: 1,
                name: "Dipitona Monoidratada 500mg",
                price: 10,
                image: "https://www.drogariaminasbrasil.com.br/media/product/311/dipirona-monoidratada-500mg-com-30-comprimidos-generico-prati-donaduzzi-4c8.jpg",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi reprehenderit possimus repellendus placeat harum distinctio aliquid vero explicabo.",
                quantity: 2,
            },
            {
                id: 2,
                name: "Dipitona Monoidratada 1000mg",
                price: 15,
                image: "https://www.drogariaminasbrasil.com.br/media/product/311/dipirona-monoidratada-500mg-com-30-comprimidos-generico-prati-donaduzzi-4c8.jpg",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi reprehenderit possimus repellendus placeat harum distinctio aliquid vero explicabo.",
                quantity: 3,
            },
        ]
    )

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
                            {cart.map((itemCart) =>
                                <ItemCart
                                    image={itemCart.image}
                                    name={itemCart.name}
                                    price={itemCart.price.toFixed(2).replace(".",",")}
                                    quantity={itemCart.quantity}
                                    description={itemCart.description}
                                    key={itemCart.id}
                                />
                            )
                            }
                        </div>
                    </article>
                </div>
                <div>
                    <div>
                        <h3 className={`${global.h3} ${global.darkGray}`}>TOTAL DA COMPRA</h3>
                        <p className={`${global.preçoTelaProduto} ${global.blueGray}`}> 
                        R$ {
                            cart.reduce((amount, current, idx) => {
                                if(idx == 1) return amount.price*amount.quantity + current.price*current.quantity
                                return amount + current.price*current.quantity
                            }).toFixed(2).replace(".",",")
                        }
                        </p>
                        <Botão
                            content='Finalizar Compra'
                            // Enviar pro backend o cart do usuário
                        />
                    </div>
                    <img className={styles.imgCesta} src={imgCesta} />
                </div>
            </main>
            <Footer />
        </div>
    )
}