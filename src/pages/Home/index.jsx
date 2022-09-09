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
import env from 'react-dotenv'


export function Home() {
  
  const history = useHistory()
  
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API}/products`)
    .then(response => setProducts(response.data)) 
    .catch(e => alert(e))
    starting()
  }, [])

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

