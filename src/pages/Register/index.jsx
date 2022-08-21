import './styles.css'
import '../../styles/global.css'
import registro from '../../assets/register.svg'

export function Register() {
    return (
        <div className='container'>
            <img src={registro} alt="" />
            <main>
                <section className='registro'>
                    <div id='titulo'>
                        <h1 className='h2'>Realize seu cadastro</h1>
                        <p className='regular14'>Insira suas informações</p>
                    </div>
                    <form action="">
                        <section className='areaDados'>
                            <div className='subAreaDados'>
                                <label htmlFor="nome">Nome</label>
                                <input type="text" name="nome" className='inputBar' id="nome" placeholder='Digite aqui' />
                            </div>
                            <div className='subAreaDados'>
                                <label htmlFor="senha">Senha</label>
                                <input type="password" name="senha" className='inputBar' id="senha" placeholder='Digite sua senha' />
                            </div>
                            <div className='subAreaDados'>
                                <label htmlFor="sobrenome">Sobrenome</label>
                                <input type="text" name="sobrenome" className='inputBar' id="sobrenome" placeholder='Digite aqui' />
                            </div>
                            <div className='subAreaDados'>
                                <label htmlFor="cpf">CPF</label>
                                <input type="number" name="cpf" className='inputBar' id="cpf" placeholder='Digite aqui' />
                            </div>
                            <div className='subAreaDados'>
                                <label htmlFor="email">E-mail</label>
                                <input type="email" name="email" className='inputBar' id="email" placeholder='Digite seu email' />
                            </div>
                            <div className='subAreaDados'>
                                <label htmlFor="cep">CEP</label>
                                <input type="number" name="cep" className='inputBar' id="cep" placeholder='Digite aqui' />
                            </div>
                        </section>
                        <section>
                            <div id='check'>
                                <div>
                                    <input type="radio" name="adm" id="" />
                                    <label htmlFor="">Conta de Cliente</label>
                                </div>
                                <div>
                                    <input type="radio" name="adm" id="" />
                                    <label htmlFor="">Conta de Administrador</label>
                                </div>
                            </div>
                            <button id='criar'>Criar conta</button>
                        </section>
                    </form>
                </section>
            </main>
            <footer>
            </footer>
        </div>
    )
}