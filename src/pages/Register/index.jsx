import styles from './styles.module.css'
import global from '../../styles/global.module.css'
import registro from '../../assets/register.svg'
import { Botão } from '../../components/Botão/Botão'
import Logo from '../../assets/logo.svg'
import { useState } from 'react'
import axios from 'axios'
const API = 'http://localhost:8000/user/register'


export function Register() {
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')
    const [cep, setCep] = useState('')
    const [cpf, setCpf] = useState('')
    const [admin, setAdmin] = useState(false)

    function Cadastrar(e) {
        e.preventDefault()
        axios.post(API, {
            name: nome,
            lastname: sobrenome,
            password: senha,
            email: email,
            cep: cep,
            cpf: cpf,
            admin: admin
        })
    }
    return (
        <div className={styles.container}>
            <img src={Logo} alt="" />
            <img src={registro} alt="" />
            <main>
                <section className={styles.registro}>
                    <div className={styles.titulo}>
                        <h1 className={global.h2}>
                            Realize seu cadastro
                        </h1>
                        <p className={`${global.semibold15} ${global.blueGray}`}>
                            Insira suas informações
                        </p>
                    </div>
                    <form onSubmit={Cadastrar} className={styles.form}>
                        <section className={styles.areaDados}>
                            <div className={styles.subAreaDados}>
                                <label className={`${global.semibold15} ${global.blueGray}`} htmlFor="nome">
                                    Nome
                                </label>
                                <input
                                    type="text" name="nome"
                                    className={`${styles.inputBar} ${styles.nome}`} id="nome"
                                    placeholder='Digite aqui'
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)} />
                            </div>
                            <div className={styles.subAreaDados}>
                                <label className={`${global.semibold15} ${global.blueGray}`} htmlFor="senha">
                                    Senha
                                </label>
                                <input
                                    type="password" name="senha"
                                    className={`${styles.inputBar} ${styles.senha}`} id="senha"
                                    placeholder='Digite sua senha'
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)} />
                            </div>
                            <div className={styles.subAreaDados}>
                                <label className={`${global.semibold15} ${global.blueGray}`} htmlFor="sobrenome">
                                    Sobrenome
                                </label>
                                <input type="text" name="sobrenome"
                                    className={`${styles.inputBar} ${styles.sobrenome}`} id="sobrenome"
                                    placeholder='Digite aqui'
                                    value={sobrenome}
                                    onChange={(e) => setSobrenome(e.target.value)} />
                            </div>
                            <div className={styles.subAreaDados}>
                                <label className={`${global.semibold15} ${global.blueGray}`} htmlFor="cpf">
                                    CPF
                                </label>
                                <input
                                    type="text" name="cpf"
                                    className={`${styles.inputBar} ${styles.cpf}`} id="cpf"
                                    placeholder='Digite aqui'
                                    value={cpf}
                                    onChange={(e) => setCpf(e.target.value)} />
                            </div>
                            <div className={styles.subAreaDados}>
                                <label className={`${global.semibold15} ${global.blueGray}`} htmlFor="email">
                                    E-mail
                                </label>
                                <input type="email" name="email" className={`${styles.inputBar} ${styles.email}`}
                                    id="email"
                                    placeholder='Digite seu email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className={styles.subAreaDados}>
                                <label className={`${global.semibold15} ${global.blueGray}`} htmlFor="cep">
                                    CEP
                                </label>
                                <input
                                    type="text" name="cep"
                                    className={`${styles.inputBar} ${styles.cep}`} id="cep"
                                    placeholder='Digite aqui'
                                    onChange={(e) => setCep(e.target.value)} />
                            </div>
                        </section>
                        <section>
                            <div onChange={(e) => setAdmin(e.target.value == 'true')} className={styles.inputCheckContas}>
                                <div>
                                    <input type="radio" name="adm" id="adm1" value="false"/>
                                    <label className={global.regular14} for="adm1">
                                        Conta de Cliente
                                    </label>
                                </div>
                                <div>
                                    <input type="radio" name="adm" id="adm2" value="true"/>
                                    <label className={global.regular14} for="adm2">
                                        Conta de Administrador
                                    </label>
                                </div>
                            </div>
                            <div>
                                <Botão content="Criar Conta" />
                            </div>
                        </section>
                    </form>
                </section>
            </main>
            <footer>
            </footer>
        </div>
    )
}