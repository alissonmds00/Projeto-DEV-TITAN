import styles from './styles.module.css'
import global from '../../styles/global.module.css'
import Logo from '../../assets/logo.svg'

export function Footer() {
    return (
            <footer className={styles.footer}>
                <img src={Logo} alt="" />
                <p className={global.regular14}>
                    Trabalhe conosco  | Termos e condições | Privacidade | Acessibilidade  | Contato
                </p>
                <ul className={global.medium10}>
                    <strong>Acesse nosso projeto</strong>
                    <br />
                    <li><a href="https://github.com/alissonmds00" target="_blank">Alisson Matias</a></li>
                    <li><a href="https://github.com/guiramos1504" target="_blank">Guilherme Ramos</a></li>
                    <li><a href="https://github.com/GuiMazur" target="_blank">João Guilherme Mazur</a></li>
                </ul>
            </footer>
    )
}