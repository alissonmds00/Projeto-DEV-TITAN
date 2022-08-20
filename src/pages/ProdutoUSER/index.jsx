import '../ProdutoUSER/styles.css'
import '../../styles/global.css'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { Produto } from '../../components/Produto/Produto'

export function ProdutoUSER() {
    return (
        <div className='container'>
            <Header />
            <Footer />
        </div>
    )
}