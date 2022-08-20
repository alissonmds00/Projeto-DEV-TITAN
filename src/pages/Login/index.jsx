import '../Login/styles.css'
import '../../styles/global.css'
import portaLogin from '../../assets/porta_login.svg'

export function Login() {
    return (
        <div className='container'>
            <img src={portaLogin} alt="" />
            <main>
                <div id='loginArea'>
                    <div id='titulo'>
                        <h1 className='h2'>Faça seu Login</h1>
                        <p className='semibold15'>Entre com as suas informações de cadastro</p>
                    </div>
                    <form action="login" id='loginForm'>
                        <label className='semibold18' htmlFor="emailBar">E-mail</label>
                        <div className='login'>
                            <input type="email" name="email" id="emailBar" className='loginItem' placeholder='Digite o seu email' onFocus={true} />
                        </div>
                        <label className='semibold15' htmlFor="password">Senha</label>
                        <div className='login'>
                            <input type="password"
                                name="senha"
                                id="passwordBar"
                                className='loginItem'
                                placeholder='Digite a sua senha' />
                        </div>
                        <a id='esqueci' className='regular14' href=""><u>Esqueci minha senha</u></a>
                        <div id="button">
                            <button className='h2'>Entrar</button>
                        </div>
                    </form>
                    <div id='registro'>
                        <p className='semibold15'>Não possui uma conta? <a href=""> Cadastre-se</a></p>
                    </div>
                </div>
            </main>
        </div>
    )
}