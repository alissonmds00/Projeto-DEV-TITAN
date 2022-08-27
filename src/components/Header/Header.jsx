import styles from './styles.module.css'
import global from '../../styles/global.module.css'
import Logo from '../../assets/logo.svg'
import Cesta from '../../assets/cesta.svg'
import userIcon from '../../assets/userIcon.svg'
import Search from '../../assets/search.svg'
import Exit from '../../assets/exit-icon.svg'
import Mainpage from '../../assets/home.svg'

export function Header(){
    return(
        <header className={styles.header}>
        <a href="">
          <img src={Logo} className={styles.logo} alt="" />
        </a>
        <a href="">
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
              <a href="" disabled>
                Acesse aqui o seu perfil
              </a>
            </p>
          </div>
          <a href="">
            <img src={Cesta} alt="" title='Cesta de compras' />
          </a>
          <a href="">
            <img src={Exit} alt="Sair da conta e voltar para o Login" />
          </a>
        </section>
      </header>
    )
}