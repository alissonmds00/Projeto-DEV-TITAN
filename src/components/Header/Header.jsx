import styles from './styles.module.css'
import global from '../../styles/global.module.css'
import Logo from '../../assets/logo.svg'
import Cesta from '../../assets/cesta.svg'
import userIcon from '../../assets/userIcon.svg'
import Search from '../../assets/search.svg'
import Exit from '../../assets/exit-icon.svg'
import Mainpage from '../../assets/home.svg'
import store from '../../store'
import { BotãoCard } from '../BotãoCard/BotãoCard'
import { useEffect } from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'


export function Header() {
  
  const [user, setUser] = useState(undefined)
  
  const history = useHistory()

  store.subscribe(() => setUser(store.getState().user))

  useEffect(() => setUser(store.getState().user))

  function logout() {
    store.dispatch({ type: 'logout' })
    localStorage.removeItem('user')
    history.push("/login")
  }

  return (
    <header className={styles.header}>
      <a onClick={() => history.push(`/`)} className={styles.atalho}>
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

        {/* {store.getState().user.admin && <BotãoCard content="Adicionar Prod."/>} */}
      
          <img id='userIcon' src={userIcon} alt="Foto do usuário" />
          <div>
            <p> 
            {user ? `Bem-vind@! ${user.name}` : 'Você ainda não está logad@.'}
            </p>
            <p>
              {user ? 'Acesse aqui o seu perfil' : ''}
            </p>
          </div>
        </div>
        <a onClick={() => history.push(`/cart`)}>
          <img src={Cesta} alt="" title='Cesta de Compras' />
        </a>
        <a className={styles.toHover} onClick={logout}>
          <img src={Exit} title="Sair da conta" />
        </a>
      </section>
    </header>
  )
}