import '../../styles/global.css'
import './styles.css' 
import Logo from '../../assets/logo.svg'
import Cesta from '../../assets/cesta.svg'
import UserIcon from '../../assets/userIcon.svg'
import Search from '../../assets/search.svg'

export function Home() {

  return (
    <div className="container">
      <header>
        <a href="">
          <img src={Logo} id="logo" alt="" />
        </a>

        <section id='searchbox'>
          <input disabled type="search" placeholder='O que você está buscando?'/>
          <img src={Search} alt="" />
        </section>

        <section id='userArea'>
          <div>
            <img id='userIcon' src={UserIcon} alt="Foto do usuário" />
            <p>
              Bem-vind@!
              <a href="">Acesse aqui o seu perfil</a>
            </p>
          </div>
          <a href="">
            <img src={Cesta} alt="" title='Cesta de compras'/>
          </a>
        </section>
        
      </header>

      <main>
      </main>
      
      <footer>
        <img src={Logo} alt="" />
        <p>
          Trabalhe conosco  | Termos e condições | Privacidade | Acessibilidade  | Contato
        </p>
        <ul>
          <strong>Acesse nosso projeto</strong>
          <li><a href="https://github.com/alissonmds00" target="_blank">Alisson Matias</a></li>
          <li><a href="https://github.com/guiramos1504" target="_blank">Guilherme Ramos</a></li>
          <li><a href="https://github.com/GuiMazur" target="_blank">João Guilherme Mazur</a></li>
        </ul>
      </footer>
    </div>
  )
}

