import styles from '../Home/styles.module.css'
import global from '../../styles/global.module.css'
import { Card } from '../../components/Card/Card'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { useState, useEffect } from 'react'
import axios from 'axios'

export function Home() {

  // const [products, setProducts] = useState(
  //   [
  //     {
  //       name: "dipirona",
  //       value: 10,
  //       image: "https://www.drogariaminasbrasil.com.br/media/product/311/dipirona-monoidratada-500mg-com-30-comprimidos-generico-prati-donaduzzi-4c8.jpg",
  //       id: 1
  //     },
  //     {
  //       name: "durateston",
  //       value: 40,
  //       image: "https://www.drogariaminasbrasil.com.br/media/product/311/dipirona-monoidratada-500mg-com-30-comprimidos-generico-prati-donaduzzi-4c8.jpg",
  //       id: 2
  //     },
  //     {
  //       name: "rivotril",
  //       value: 15,
  //       image: "https://www.drogariaminasbrasil.com.br/media/product/311/dipirona-monoidratada-500mg-com-30-comprimidos-generico-prati-donaduzzi-4c8.jpg",
  //       id: 3
  //     },
  //     {
  //       name: "teste",
  //       value: 20,
  //       image: "https://www.drogariaminasbrasil.com.br/media/product/311/dipirona-monoidratada-500mg-com-30-comprimidos-generico-prati-donaduzzi-4c8.jpg",
  //       id: 4
  //     },
  //     {
  //       name: "dipirona",
  //       value: 10,
  //       image: "https://www.drogariaminasbrasil.com.br/media/product/311/dipirona-monoidratada-500mg-com-30-comprimidos-generico-prati-donaduzzi-4c8.jpg",
  //       id: 5
  //     },
  //     {
  //       name: "dipirona",
  //       value: 10,
  //       image: "https://www.drogariaminasbrasil.com.br/media/product/311/dipirona-monoidratada-500mg-com-30-comprimidos-generico-prati-donaduzzi-4c8.jpg",
  //       id: 6
  //     },
  //     {
  //       name: "dipirona",
  //       value: 10,
  //       image: "https://www.drogariaminasbrasil.com.br/media/product/311/dipirona-monoidratada-500mg-com-30-comprimidos-generico-prati-donaduzzi-4c8.jpg",
  //       id: 7
  //     },
  //   ]
  // )                     DEPOIS APAGAR ISSO E FAZER O "PRODUCTS" COMEÇAR COMO []. O USEEFFECT QUE ADICIONA OS PRODUCTOS AO PRODUCTS

  // useEffect(async () => {
  //   let tempProducts = await axios.get('http://localhost:8000/products')
  //   setProducts(tempProducts)
  // })

  return (
    <div className="container">
      <Header />
      <main className={styles.main}>
        <article className={styles.articleMain}>
          <div id='destaques' className={styles.areaTitle}>
            <h2 className={`${global.h2}`}>DESTAQUES DA SEMANA</h2>
          </div>
          <div className={styles.areaCards}>
            
            {/* {products.map((product) => 
              <a href={`http://localhost:3000/user/${product.id}`}>
                <Card 
                link={product.image}
                nome={product.name}
                valor={product.value}
                key={product.id}
                />
              </a>
            )} */}

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

