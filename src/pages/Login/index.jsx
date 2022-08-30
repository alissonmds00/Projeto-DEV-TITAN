import styles from '../Login/styles.module.css'
import global from '../../styles/global.module.css'
import portaLogin from '../../assets/porta_login.svg'
import { Botão } from '../../components/Botão/Botão'
import Logo from '../../assets/logo.svg'

export function Login() {
    return (
        <div className={styles.container}>
            <img src={Logo} alt="" />
            <img src={portaLogin} alt="" />
            <main>
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
                        <label className={`${global.semibold15} ${global.blueGray}`} htmlFor="emailBar">
                            E-mail
                        </label>
                        <div className={`${styles.login} ${styles.emailBar}`} >
                            <input type="email" name="email" id="emailBar" className={styles.loginItem} placeholder='Digite o seu email' onFocus={true} />
                        </div>
                        <label className={`${global.semibold15} ${global.blueGray}`} htmlFor="password">
                            Senha
                        </label>
                        <div className={`${styles.login} ${styles.passwordBar}`}>
                            <input type="password"
                                name="senha"
                                id="passwordBar"
                                className={`${styles.loginItem}`}
                                placeholder='Digite a sua senha' />
                        </div>
                        <Botão content="ENTRAR"/>
                    </form>
                    <div className={styles.registro}>
                        <p className={global.regular14}>
                            Não possui uma conta?
                            <a className={global.semibold15} href="http://127.0.0.1:3000/register">
                                Cadastre-se
                            </a>
                        </p>
                    </div>
                </div>
            </main>
        </div>
    )
}