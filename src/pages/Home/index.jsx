import '../Home/styles.css'
import '../../styles/global.css'
import { Card } from '../../components/Card/Card'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'

export function Home() {
  return (
    <div className="container">
      <Header />
      <main>
        <section>
          <div id='areaTitle'>
            <h2 className='h2'>DESTAQUES DA SEMANA</h2>
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

