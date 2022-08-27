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
        <section className={styles.mainsection}>
          <div className={styles.areaTitle}>
            <h2 className={`${global.h2} ${styles.areaCards}`}>DESTAQUES DA SEMANA</h2>
          </div>
          <div id='areaCards'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

