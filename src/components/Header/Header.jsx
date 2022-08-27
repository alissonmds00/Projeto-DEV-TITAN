import styles from './styles.module.css'
import global from '../../styles/global.module.css'
import Logo from '../../assets/logo.svg'
import Cesta from '../../assets/cesta.svg'
import userIcon from '../../assets/userIcon.svg'
import Search from '../../assets/search.svg'
import Exit from '../../assets/exit-icon.svg'
import Mainpage from '../../assets/home.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <a href="http://localhost:3000/" className={styles.atalho}>
        <img src={Logo} className={styles.logo} alt="" />
        <img src={Mainpage} alt="" />
      </a>
      <section className={styles.searchbox}>
        <input className={global.regular14}
          disabled type="search" placeholder='O que você está buscando?' />
        <img src={Search} alt="" />
      </section>
      <section className={styles.userArea}>
        <div className={global.medium10}>
          <img id='userIcon' src={userIcon} alt="Foto do usuário" />
          <p>
            Bem-vind@!
            <p>
              Acesse aqui o seu perfil
            </p>
          </p>
        </div>
        <a href="http://localhost:3000/cart">
          <img src={Cesta} alt="" title='Cesta de Compras' />
        </a>
        <a href="http://localhost:3000/login">
          <img src={Exit} title="Sair da conta" />
        </a>
      </section>
    </header>
  )
}