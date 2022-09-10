import styles from '../ProdutoADM/styles.module.css'
import global from '../../styles/global.module.css'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { Produto } from '../../components/Produto/Produto'
import { Botão } from '../../components/Botão/Botão'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import starting from '../../functions/starting'
import { useHistory, useParams } from 'react-router-dom'

export const ProdutoADM = () => {
    const { id } = useParams()

    const [form, setForm] = useState({})

    const history = useHistory()

    useEffect(() => {
        starting()
        axios.get(`${import.meta.env.VITE_API}/products/${id}`)
            .then(response => setForm(response.data))
            .catch(e => alert(e))
    }, [])

    function atualizarProduto(e) {
        e.preventDefault()
        axios.put(`${import.meta.env.VITE_API}/products/update/${id}`, form)
            .then(r =>
                alert(r.data)
            )
            .catch(e =>
                alert(e.response ? e.response.data : e)
            )
    }

    function deletarProduto(e) {
        axios.delete(`${import.meta.env.VITE_API}/products/delete/${id}`)
            .then(r =>
                alert(r.data)
            )
            .then(() =>
                history.push('/')
            )
            .catch(e =>
                alert(e.response ? e.response.data : e)
            )
    }

    return (
        <div className={styles.container}>
            <Header />
            <section className={styles.section}>
                <Produto img={form.image} />
                <div>
                    <form onSubmit={atualizarProduto} name='areaForm' className={styles.areaForm}>
                        <label htmlFor="produtoNome" className={`${global.semibold15} ${global.darkGray}`}>
                            Nome do produto
                        </label>
                        <br />
                        <input type="text" name='produtoNome' value={form.name} required onChange={(e) => setForm({ ...form, name: e.target.value })} />
                        <br />
                        <label htmlFor="produtoIMG" className={`${global.semibold15} ${global.darkGray}`}>
                            Imagem do produto
                        </label>
                        <br />
                        <input type="url" name='produtoIMG' value={form.image} required onChange={(e) => setForm({ ...form, image: e.target.value })} />
                        <br />
                        <label htmlFor="produtoDescricao" className={`${global.semibold15} ${global.darkGray}`}>
                            Descrição do Produto
                        </label>
                        <br />
                        <textarea name="produtoDescricao" id="produtoDescricao" cols="30" rows="7" required value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })}></textarea>
                        <div>
                            <div>
                                <label htmlFor="produtoQuant">
                                    {form.stock < 10 ? <p className={`${global.semibold15} ${global.red}`}> Estoque Baixo!</p> : <p className={`${global.semibold15} ${global.darkGray}`}> Estoque </p>}
                                </label>
                                <input type="number" name="produtoQuant" id="produtoQuant" value={form.stock} required onChange={(e) => setForm({ ...form, stock: parseFloat(e.target.value) })} />
                                <br />

                            </div>
                            <div>
                                <label htmlFor="produtoPreco" className={`${global.semibold15} ${global.darkGray}`} >
                                    Preço Unitário
                                </label>
                                <input type="number" name="produtoPreco" id="produtoPreco" required step='0.01' className={styles.inputNumber} value={form.price} onChange={(e) => setForm({ ...form, price: parseFloat(e.target.value) })} />
                                <label htmlFor="">
                                </label>
                            </div>
                        </div>
                        <Botão content="Editar Produto" />
                        <a className={`${global.semibold15} ${global.red}`} onClick={() => deletarProduto()}>Deletar Produto</a>
                    </form>
                </div>
            </section >
            <Footer />
        </div >
    )
}