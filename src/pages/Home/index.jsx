import '../Home/styles.css' 
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
          <input className='regular18' disabled type="search" placeholder='O que você está buscando?'/>
          <img src={Search} alt="" />
        </section>

        <section id='userArea'>
          <div className='medium14'>
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
        <section>

          <div id='areaTitle'>
            <h2 className='h2'>DESTAQUES DA SEMANA</h2>
          </div>

          <div id='areaCards'>
            <div className='Card'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/37/Ritalina.JPG" alt="" />
              <p className='medium14'>Nome do item nome do item nome do item</p>
              <p className='h2'>R$ 19,90</p>
              <button className='medium14'>COMPRAR</button>
            </div>
            <div className='Card'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/37/Ritalina.JPG" alt="" />
              <p className='medium14'>Nome do item nome do item nome do item</p>
              <p className='h2'>R$ 19,90</p>
              <button className='medium14'>COMPRAR</button>
            </div>
            <div className='Card'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/37/Ritalina.JPG" alt="" />
              <p className='medium14'>Nome do item nome do item nome do item</p>
              <p className='h2'>R$ 19,90</p>
              <button className='medium14'>COMPRAR</button>
            </div>
            <div className='Card'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/37/Ritalina.JPG" alt="" />
              <p className='medium14'>Nome do item nome do item nome do item</p>
              <p className='h2'>R$ 19,90</p>
              <button className='medium14'>COMPRAR</button>
            </div>
            <div className='Card'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/37/Ritalina.JPG" alt="" />
              <p className='medium14'>Nome do item nome do item nome do item</p>
              <p className='h2'>R$ 19,90</p>
              <button className='medium14'>COMPRAR</button>
            </div>
          </div>

        </section>
      </main>
      
      <footer>
        <img src={Logo} alt="" />
        <p className='regular18'>
          Trabalhe conosco  | Termos e condições | Privacidade | Acessibilidade  | Contato
        </p>
        <ul className='medium14'>
          <strong>Acesse nosso projeto</strong>
          <li><a href="https://github.com/alissonmds00" target="_blank">Alisson Matias</a></li>
          <li><a href="https://github.com/guiramos1504" target="_blank">Guilherme Ramos</a></li>
          <li><a href="https://github.com/GuiMazur" target="_blank">João Guilherme Mazur</a></li>
        </ul>
      </footer>
    </div>
  )
}

