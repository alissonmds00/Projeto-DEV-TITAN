import styles from './styles.module.css'
import global from '../../styles/global.module.css'
import registro from '../../assets/register.svg'

export function Register() {
    return (
        <div className={styles.container}>
            <img src={registro} alt="" />
            <main>
                <section className={styles.registro}>
                    <div id={styles.titulo}>
                        <h1 className={global.h2}>
                            Realize seu cadastro
                        </h1>
                        <p className={global.semibold15}>
                            Insira suas informações
                        </p>
                    </div>
                    <form action="" className={styles.form}>
                        <section className={styles.areaDados}>
                            <div className={styles.subAreaDados}>
                                <label className={global.semibold15} htmlFor="nome">
                                    Nome
                                </label>
                                <input
                                    type="text" name="nome"
                                    className='inputBar' id="nome"
                                    placeholder='Digite aqui' />
                            </div>
                            <div className={styles.subAreaDados}>
                                <label className={global.semibold15} htmlFor="senha">
                                    Senha
                                </label>
                                <input
                                    type="password" name="senha"
                                    className={`${styles.inputBar}` && `${styles.senha}`} id="senha"
                                    placeholder='Digite sua senha' />
                            </div>
                            <div className={styles.subAreaDados}>
                                <label className={global.semibold15} htmlFor="sobrenome">
                                    Sobrenome
                                </label>
                                <input type="text" name="sobrenome"
                                    className={`${styles.inputBar}` && `${styles.sobrenome}`} id="sobrenome"
                                    placeholder='Digite aqui' />
                            </div>
                            <div className={styles.subAreaDados}>
                                <label className={global.semibold15} htmlFor="cpf">
                                    CPF
                                </label>
                                <input
                                    type="number" name="cpf"
                                    className={`${styles.inputBar}` &&  `${styles.cpf}`} id="cpf"
                                    placeholder='Digite aqui' />
                            </div>
                            <div className={styles.subAreaDados}>
                                <label className={global.semibold15} htmlFor="email">
                                    E-mail
                                </label>
                                <input type="email" name="email" className={`${styles.inputBar}` && `${styles.email}`}  id="email" placeholder='Digite seu email' />
                            </div>
                            <div className={styles.subAreaDados}>
                                <label className={global.semibold15} htmlFor="cep">
                                    CEP
                                </label>
                                <input
                                    type="number" name="cep"
                                    className={`${styles.inputBar}` && `${styles.cep}`} id="cep"
                                    placeholder='Digite aqui' />
                            </div>
                        </section>
                        <section>
                            <div className={styles.inputCheckContas}>
                                <div>
                                    <input type="radio" name="adm" id="" />
                                    <label className={global.regular14} htmlFor="">
                                        Conta de Cliente
                                    </label>
                                </div>
                                <div>
                                    <input type="radio" name="adm" id="" />
                                    <label className={global.regular14} htmlFor="">
                                        Conta de Administrador
                                    </label>
                                </div>
                            </div>
                            <button id='botaoCriarConta'>
                                Criar conta
                            </button>
                        </section>
                    </form>
                </section>
            </main>
            <footer>
            </footer>
        </div>
    )
}