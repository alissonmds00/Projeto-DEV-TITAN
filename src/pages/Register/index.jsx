import styles from './styles.module.css'
import global from '../../styles/global.module.css'
import registro from '../../assets/register.svg'
import { Botão } from '../../components/Botão/Botão'
import Logo from '../../assets/logo.svg'
import { useState } from 'react'
import axios from 'axios'
const API = 'http//'


export function Register() {
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')
    const [cep, setCep] = useState()
    const [cpf, setCpf] = useState()
    const [admin, setAdmin] = useState('false')

    function Cadastrar() {
        axios.post(API, {
            name: { nome },
            lastname: { sobrenome },
            password: { senha },
            email: { email },
            cep: { cep },
            cpf: { cpf },
            admin: { admin }
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
                                    onFocus
                                    onChange={(e) => [setNome(e.target.value)]} />
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
                                    onChange={(e) => [setSenha(e.target.value)]} />
                            </div>
                            <div className={styles.subAreaDados}>
                                <label className={`${global.semibold15} ${global.blueGray}`} htmlFor="sobrenome">
                                    Sobrenome
                                </label>
                                <input type="text" name="sobrenome"
                                    className={`${styles.inputBar} ${styles.sobrenome}`} id="sobrenome"
                                    placeholder='Digite aqui'
                                    value={sobrenome}
                                    onChange={(e) => [setSobrenome(e.target.value)]} />
                            </div>
                            <div className={styles.subAreaDados}>
                                <label className={`${global.semibold15} ${global.blueGray}`} htmlFor="cpf">
                                    CPF
                                </label>
                                <input
                                    type="number" name="cpf"
                                    className={`${styles.inputBar} ${styles.cpf}`} id="cpf"
                                    placeholder='Digite aqui'
                                    value={cpf}
                                    onChange={(e) => [setCpf(e.target.value)]} />
                            </div>
                            <div className={styles.subAreaDados}>
                                <label className={`${global.semibold15} ${global.blueGray}`} htmlFor="email">
                                    E-mail
                                </label>
                                <input type="email" name="email" className={`${styles.inputBar} ${styles.email}`}
                                    id="email"
                                    placeholder='Digite seu email'
                                    value={email}
                                    onChange={(e) => [setEmail(e.target.value)]}
                                />
                            </div>
                            <div className={styles.subAreaDados}>
                                <label className={`${global.semibold15} ${global.blueGray}`} htmlFor="cep">
                                    CEP
                                </label>
                                <input
                                    type="number" name="cep"
                                    className={`${styles.inputBar} ${styles.cep}`} id="cep"
                                    placeholder='Digite aqui'
                                    onChange={(e) => [setCep(e.target.value)]} />
                            </div>
                        </section>
                        <section>
                            <div className={styles.inputCheckContas}>
                                <div>
                                    <input type="radio" name="adm" id="" value={true} checked onChange={(e) => [setAdmin(e.target.value)]} />
                                    <label className={global.regular14} htmlFor="">
                                        Conta de Cliente
                                    </label>
                                </div>
                                <div>
                                    <input type="radio" name="adm" value={true} onChange={(e) => [setAdmin(e.target.value)]}/>
                                    <label className={global.regular14} htmlFor="">
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