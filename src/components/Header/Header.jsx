import styles from './styles.module.css'
import global from '../../styles/global.module.css'
import Logo from '../../assets/logo.svg'
import Cesta from '../../assets/cesta.svg'
import userIcon from '../../assets/userIcon.svg'
import Search from '../../assets/search.svg'
import Exit from '../../assets/exit-icon.svg'
import Mainpage from '../../assets/home.svg'
import store from '../../store'
import { useEffect } from 'react'
import starting from '../../functions/starting'

export function Header() {

  useEffect(() => {
    starting()
  }, [])

  function logout() {
    store.dispatch({ type: 'logout' })
    localStorage.removeItem('user')
    window.location.href = "http://localhost:3000/login"
  }

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
          <div>
            {store.getState().user ? `Bem-vind@! ${store.getState().user.name}` : 'Você ainda não está logad@.'}
            <p>
              {store.getState().user ? 'Acesse aqui o seu perfil' : ''}
            </p>
          </div>
        </div>
        <a href="http://localhost:3000/cart">
          <img src={Cesta} alt="" title='Cesta de Compras' />
        </a>
        <a className={styles.toHover} onClick={logout}>
          <img src={Exit} title="Sair da conta" />
        </a>
      </section>
    </header>
  )
}