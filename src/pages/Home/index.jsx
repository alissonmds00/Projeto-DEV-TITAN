import styles from '../Home/styles.module.css'
import global from '../../styles/global.module.css'
import { Card } from '../../components/Card/Card'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { useState, useEffect } from 'react'
import axios from 'axios'

export function Home() {

  

  // useEffect(async () => {
  //   let tempProducts = await axios.get(`http://localhost:8000/products`)
  //   setProducts(tempProducts)
  // })

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
        name: "dipirona",
        price: 20,
        image: "https://www.drogariaminasbrasil.com.br/media/product/311/dipirona-monoidratada-500mg-com-30-comprimidos-generico-prati-donaduzzi-4c8.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi reprehenderit possimus repellendus placeat harum distinctio aliquid vero explicabo.",
        quantity: 20,
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
              <a href={`http://localhost:3000/user/${product.id}`}>
                <Card
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  key={product.id}
                />
              </a>
            )}
          </div>
        </article>
        <article className={styles.articleMain}>
          <div id='promocoes' className={styles.areaTitle}>
            <h2 className={`${global.h2}`}>PROMOÇÕES IMPERDÍVEIS</h2>
          </div>
          <div className={styles.areaCards}>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}

