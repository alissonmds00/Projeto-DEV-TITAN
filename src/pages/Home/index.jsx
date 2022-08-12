import './styles.css'
import Logo from '../../assets/logo.svg'
import Cesta from '../../assets/cesta.svg'
import UserIcon from '../../assets/userIcon.svg'
import Search from '../../assets/search.svg'
export function Home() {

  return (
    <div className="container">
      <header>
        <a href="#">
          <img src={Logo} id="logo" alt="" />
        </a>
          <form action="" id='searchbox'>
            <input type="search" name="" placeholder='O que você está buscando?' disabled/>
            <button id='searchbutton'><img src={Search} alt="" /></button>
          </form>
        <div id='userarea'>
        <ul id='userarea'>
          <li id='logar'>
            <img id='usericon' src={UserIcon} alt="" />
            <p>
              Bem-vind@!
              <a href="">Acesse aqui o seu perfil</a>
            </p>
          </li>
          <li id='buycart'>
            <a href=""><img src={Cesta} alt="" title='Cesta de compras' /></a>
          </li>
        </ul>
        </div>
      </header>

      <main>

      </main>
      <footer>
        <img src={Logo} alt="" />
        <div id="contact">
          <p>2022</p>
          <ul>
            <li><a href="">Trabalhe conosco</a></li>
            <li><a href="">Termos e condições</a></li>
            <li><a href="">Acessibilidade</a></li>
            <li><a href="">Contato</a></li>
          </ul>
        </div>
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

