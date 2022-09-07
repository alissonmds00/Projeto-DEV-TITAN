import styles from '../Home/styles.module.css'
import global from '../../styles/global.module.css'
import { Card } from '../../components/Card/Card'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { useState, useEffect } from 'react'
import axios from 'axios'
import starting from '../../functions/starting'
import { useHistory } from 'react-router-dom'
import store from '../../store'


export function Home() {
  
  const history = useHistory()
  
  useEffect(() => {
    // let tempProducts = await axios.get(`http://localhost:8000/products`)
    // setProducts(tempProducts)
    starting()
  }, [])

  const [products, setProducts] = useState(
    [
      {
        id: 1,
        name: "Dipirona Monoidratada 500mg",
        price: 10,
        image: "https://www.drogariaminasbrasil.com.br/media/product/311/dipirona-monoidratada-500mg-com-30-comprimidos-generico-prati-donaduzzi-4c8.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi reprehenderit possimus repellendus placeat harum distinctio aliquid vero explicabo.",
        quantity: 20,
      },
      {
        id: 2,
        name: "Dipirona Monoidratada 1000mg",
        price: 20,
        image: "https://uploads.consultaremedios.com.br/product_variation_images/full/381836aa361a2211eda8f29e0a0dd87cf0d16a27.jpg?1653565706",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi reprehenderit possimus repellendus placeat harum distinctio aliquid vero explicabo.",
        quantity: 17,
      },
      // DEPOIS APAGAR ISSO E FAZER O "PRODUCTS" COMEÇAR COMO []. O USEEFFECT QUE ADICIONA OS PRODUTOS AO PRODUCTS //
    ]
  )

  return (
    <div className="container">
      <Header />
      <main className={styles.main}>
        <article className={styles.articleMain}>
          <div id='destaques' className={styles.areaTitle}>
            <h2 className={`${global.h2}`}>DESTAQUES DA SEMANA</h2>
          </div>
          <div className={styles.areaCards}>
            {products.map((product) =>
              <a onClick={() => history.push(`/product/${product.id}`)} key={product.id}>
                <Card
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  content={store.getState().user && store.getState().user.admin ? 'Editar' : 'Comprar'}
                />
              </a>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}

