import styles from '../Login/styles.module.css'
import global from '../../styles/global.module.css'
import portaLogin from '../../assets/porta_login.svg'

export function Login() {
    return (
        <div className={styles.container}>
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
                        <a id='esqueci' className={global.regular14} href="">
                            <u>Esqueci minha senha</u>
                        </a>
                        <div id="button">
                            <button className={`${styles.button} ${global.h2}`}>
                                Entrar
                            </button>
                        </div>
                    </form>
                    <div id={global.registro}>
                        <p className={global.semibold15}>
                            Não possui uma conta?
                            <a href="">
                                Cadastre-se
                            </a>
                        </p>
                    </div>
                </div>
            </main>
        </div>
    )
}