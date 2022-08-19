import './styles.css'
import Logo from '../../assets/logo.svg'

export function Footer(){
    return (
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
    )
}