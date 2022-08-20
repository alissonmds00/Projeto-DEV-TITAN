import './styles.css'
import Logo from '../../assets/logo.svg'
import Cesta from '../../assets/cesta.svg'
import userIcon from '../../assets/userIcon.svg'
import Search from '../../assets/search.svg'

export function Header(){
    return(
        <header>
        <a href="">
          <img src={Logo} id="logo" alt="" />
        </a>
        <section id='searchbox'>
          <input className='regular14' disabled type="search" placeholder='O que você está buscando?' />
          <img src={Search} alt="" />
        </section>
        <section id='userArea'>
          <div className='medium10'>
            <img id='userIcon' src={userIcon} alt="Foto do usuário" />
            <p>
              Bem-vind@!
              <a href="">Acesse aqui o seu perfil</a>
            </p>
          </div>
          <a href="">
            <img src={Cesta} alt="" title='Cesta de compras' />
          </a>
        </section>
      </header>
    )
}