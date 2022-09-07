import styles from '../Login/styles.module.css'
import global from '../../styles/global.module.css'
import portaLogin from '../../assets/porta_login.svg'
import Logo from '../../assets/logo.svg'
import { Botão } from '../../components/Botão/Botão'
import store from '../../store'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import starting from '../../functions/starting'
import { useHistory } from 'react-router-dom'


export function Login() {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    
    const history = useHistory()
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            var response = await axios.post(`http://localhost:8000/users/login`, form)
            localStorage.setItem('user', JSON.stringify(response.data))
            store.dispatch({type: 'login', data: response.data})
            alert('Login efetuado com sucesso!')
            history.push("/")
        }catch(e){alert(e.response.data)}
    }

    useEffect(() => {
        starting()
    }, [])

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
                    <form onSubmit={handleSubmit} className={styles.loginForm}>
                        <label className={`${global.semibold15} ${global.blueGray}`} htmlFor="email">
                            E-mail
                        </label>
                        <input 
                            type="email" 
                            name="email" 
                            className={`${styles.inputBar} ${styles.email}`} 
                            id="email" 
                            placeholder='Digite seu email'
                            value={form.email}
                            onChange={e => setForm({...form, email: e.target.value})}
                        />
                        
                        <label className={`${global.semibold15} ${global.blueGray}`} htmlFor="senha">
                            Senha
                        </label>
                        <input
                            type="password" 
                            name="senha"
                            className={`${styles.inputBar} ${styles.senha}`} 
                            id="senha"
                            placeholder='Digite sua senha'
                            value={form.password}
                            onChange={e => setForm({...form, password: e.target.value})} 
                        />

                        <Botão content="ENTRAR" />
                    </form>
                    <div className={styles.registro}>
                        <p className={global.regular14}>
                            Não possui uma conta?
                            <br />
                            <a className={global.semibold15} onClick={() => history.push(`/register`)}>
                                Cadastre-se
                            </a>
                        </p>
                    </div>
                </div>
            </section >
        </div >
    )
}