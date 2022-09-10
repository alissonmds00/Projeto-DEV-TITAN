import styles from './styles.module.css'
import global from '../../styles/global.module.css'
import registro from '../../assets/register.svg'
import { Botão } from '../../components/Botão/Botão'
import Logo from '../../assets/logo.svg'
import { useState, useEffect } from 'react'
import axios from 'axios'
import starting from '../../functions/starting'
import store from '../../store'
import { useHistory } from 'react-router-dom'


export function Register() {

    const history = useHistory()
    
    const [form, setForm] = useState({
        name: '',
        lastname: '',
        password: '',
        email: '',
        cep: '',
        cpf: '',
        admin: false
    })
    

    function Cadastrar(e) {
        e.preventDefault()
        axios.post(`${import.meta.env.VITE_API}/users/register`, form)
        .then(response => {
            localStorage.setItem('user', JSON.stringify(response.data))
            store.dispatch({type: 'login', data: response.data})
            alert('Cadastro efetuado com sucesso!')
            history.push("/")
        })
        .catch(e => alert(e.response ? e.response.data : e))
    }

    useEffect(() => {
        starting()
    }, [])

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
                                    value={form.name}
                                    onChange={(e) => setForm({...form, name: e.target.value})} />
                            </div>
                            <div className={styles.subAreaDados}>
                                <label className={`${global.semibold15} ${global.blueGray}`} htmlFor="senha">
                                    Senha
                                </label>
                                <input
                                    type="password" name="senha"
                                    className={`${styles.inputBar} ${styles.senha}`} id="senha"
                                    placeholder='Digite sua senha'
                                    value={form.password}
                                    onChange={(e) => setForm({...form, password: e.target.value})} />
                            </div>
                            <div className={styles.subAreaDados}>
                                <label className={`${global.semibold15} ${global.blueGray}`} htmlFor="sobrenome">
                                    Sobrenome
                                </label>
                                <input type="text" name="sobrenome"
                                    className={`${styles.inputBar} ${styles.sobrenome}`} id="sobrenome"
                                    placeholder='Digite aqui'
                                    value={form.lastname}
                                    onChange={(e) => setForm({...form, lastname: e.target.value})} />
                            </div>
                            <div className={styles.subAreaDados}>
                                <label className={`${global.semibold15} ${global.blueGray}`} htmlFor="cpf">
                                    CPF
                                </label>
                                <input
                                    type="text" name="cpf"
                                    className={`${styles.inputBar} ${styles.cpf}`} id="cpf"
                                    placeholder='Digite aqui'
                                    value={form.cpf}
                                    onChange={(e) => setForm({...form, cpf: e.target.value})} />
                            </div>
                            <div className={styles.subAreaDados}>
                                <label className={`${global.semibold15} ${global.blueGray}`} htmlFor="email">
                                    E-mail
                                </label>
                                <input type="email" name="email" className={`${styles.inputBar} ${styles.email}`}
                                    id="email"
                                    placeholder='Digite seu email'
                                    value={form.email}
                                    onChange={(e) => setForm({...form, email: e.target.value})}
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
                                    value={form.cep}
                                    onChange={(e) => setForm({...form, cep: e.target.value})} />
                            </div>
                        </section>
                        <section>
                            <div onChange={(e) => setForm({...form, admin: e.target.value == 'true'})} className={styles.inputCheckContas}>
                                <div>
                                    <input className={styles.radio} type="radio" name="adm" id="adm1" value="false"/>
                                    <label className={global.regular14} htmlFor="adm1">
                                        Conta de Cliente
                                    </label>
                                </div>
                                <div>
                                    <input className={styles.radio} type="radio" name="adm" id="adm2" value="true"/>
                                    <label className={global.regular14} htmlFor="adm2">
                                        Conta de Administrador
                                    </label>
                                </div>
                            </div>
                            <div>
                                <Botão content="Criar Conta" />
                            </div>
                        </section>
                    </form>
                    <p className={global.regular14}>
                        Já possui uma conta? <a className={global.semibold15} onClick={() => history.push(`/login`)}>Faça login</a>
                    </p>
                </section>
            </main>
            <footer>
            </footer>
        </div>
    )
}