import styles from '../ProdutoADM/styles.module.css'
import global from '../../styles/global.module.css'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { Produto } from '../../components/Produto/Produto'
import { Botão } from '../../components/Botão/Botão'
import axios from 'axios'
import { useState } from 'react'

export function ProdutoADM() {
/*    const nome = [Name, setName], useState()
    function aicionarProduto() {

        axios.post(req, res)
    }*/
    return (
        <div className='container'>
            <Header />
            <section className={styles.section}>
                <Produto />
                <div>
                    <form action="" id='areaForm'>
                        <div>
                            <label htmlFor="produtoNome" className={global.semibold15}>
                                Nome do produto
                            </label>
                            <br />
                            <input type="text" id='produtoNome' />
                            <br />
                            <label htmlFor="produtoDescricao" className={global.semibold15}>
                                Descrição do Produto
                            </label>
                            <br />
                            <textarea name="" id="produtoDescricao" cols="30" rows="7" value="" ></textarea>
                        </div>
                        <div>
                            <label htmlFor="produtoQuant" className={global.semibold15}>
                                Estoque
                            </label>
                            <input type="number" name="" id="produtoQuant" />
                            <br />
                            <label htmlFor="produtoPreco" className={global.semibold15} >
                                Preço por item
                            </label>
                            <input type="number" name="" id="produtoPreco" className={styles.inputNumber} />
                        </div>
                        <Botão content="Atualizar Produto" />
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    )
}