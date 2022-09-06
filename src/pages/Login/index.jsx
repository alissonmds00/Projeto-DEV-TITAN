import styles from '../Login/styles.module.css'
import global from '../../styles/global.module.css'
import portaLogin from '../../assets/porta_login.svg'
import Logo from '../../assets/logo.svg'
import { Botão } from '../../components/Botão/Botão'
import store from '../../store'

export function Login() {
    return (
        <div className={styles.container}>
            <img src={Logo} alt="" />
            <img src={portaLogin} alt="" />
            <section>
                <div className={styles.loginArea}>
                    <div id={styles.titulo}>
                        <h1 className={`${global.h2} ${styles.titulo}`}>
                            Faça seu Login
                        </h1>
                        <p className={`${global.semibold15} ${styles.titulo} ${global.blueGray}`}>
                            Entre com as suas informações de cadastro
                        </p>
                    </div>
                    <form action="login" className={styles.loginForm}>
                        <label className={`${global.semibold15} ${global.blueGray}`} htmlFor="email">
                            E-mail
                        </label>
                        <input type="email" name="email" className={`${styles.inputBar} ${styles.email}`} id="email" placeholder='Digite seu email' />
                        
                        <label className={`${global.semibold15} ${global.blueGray}`} htmlFor="senha">
                            Senha
                        </label>
                        <input
                            type="password" name="senha"
                            className={`${styles.inputBar} ${styles.senha}`} id="senha"
                            placeholder='Digite sua senha' />

                        <Botão content="ENTRAR" />
                    </form>
                    <div className={styles.registro}>
                        <p className={global.regular14}>
                            Não possui uma conta?
                            <br />
                            <a className={global.semibold15} href="http://127.0.0.1:3000/register">
                                Cadastre-se
                            </a>
                        </p>
                    </div>
                </div>
            </section >
        </div >
    )
}