import './styles.css'
import Logo from '../../assets/logo.svg'

export function Login() {
    return (
        <div className='container'>
            <header>
                <img id='logo' src={Logo} alt="" />
            </header>
            <main>
                <div id='loginarea'>
                    <div id='titulo'>
                        <h1 className='h2'>Faça seu Login</h1>
                        <p className='semibold18'>Entre com as suas informações de cadastro</p>
                    </div>
                    <form action="login" id='loginform'>
                        <label htmlFor="emailbar">E-mail</label>
                        <div className='login'>
                            <input type="email" name="email" id="emailbar" className='loginitem' placeholder='Digite o seu email' autoFocus />
                        </div>
                        <label htmlFor="password">Senha</label>
                        <div className='login'>
                            <input type="password"
                                name="senha"
                                id="passwordbar"
                                className='loginitem'
                                placeholder='Digite a sua senha' />
                        </div>
                        <a href="">Esqueci minha senha</a>
                        <button>Entrar</button>
                    </form>
                    <div>
                        <p>Não possui uma conta? <a href=""> Cadastre-se</a></p>
                    </div>
                </div>
            </main>
            <footer>

            </footer>
        </div>
    )
}