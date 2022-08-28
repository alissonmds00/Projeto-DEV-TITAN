import styles from '../Home/styles.module.css'
import global from '../../styles/global.module.css'
import { Card } from '../../components/Card/Card'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { useState } from 'react'
import axios from 'axios'

export function Home() {

  return (
    <div className="container">
      <Header />
      <main className={styles.main}>
        <article className={styles.articleMain}>
          <div id='destaques' className={styles.areaTitle}>
            <h2 className={`${global.h2}`}>DESTAQUES DA SEMANA</h2>
          </div>
          <div className={styles.areaCards}>
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

