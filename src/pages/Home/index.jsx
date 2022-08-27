import styles from '../Home/styles.module.css'
import global from '../../styles/global.module.css'
import { Card } from '../../components/Card/Card'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'

export function Home() {
  return (
    <div className="container">
      <Header />
      <main className={styles.main}>
        <article className={styles.articleMain}>
          <div className={styles.areaTitle}>
            <h2 className={`${global.h2}`}>DESTAQUES DA SEMANA</h2>
          </div>
          <div className={styles.areaCards}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </article>
        <article className={styles.articleMain}>
          <div className={styles.areaTitle}>
            <h2 className={`${global.h2}`}>PROMOÇÕES IMPERDÍVEIS</h2>
          </div>
          <div className={styles.areaCards}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}

