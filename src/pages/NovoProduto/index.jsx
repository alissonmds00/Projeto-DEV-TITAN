import styles from './styles.module.css'
import global from '../../styles/global.module.css'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { Produto } from '../../components/Produto/Produto'
import { Botão } from '../../components/Botão/Botão'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import starting from '../../functions/starting'

export const NovoProduto = () => {

    const initForm = {
        name: '',
        price: 0,
        image: '',
        description: '',
        stock: 0
    }

    const [form, setForm] = useState(initForm)

    useEffect(() => {
        starting()
    }, [])

    function adicionarProduto(e) {
        e.preventDefault()
        axios.post(`${import.meta.env.VITE_API}/products/register`, form)
            .then(r =>
                alert(r.data)
            )
            .then(() => {
                setForm(initForm)
            })
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
                    <form onSubmit={adicionarProduto} name='areaForm' className={styles.areaForm}>
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
                        <textarea name="produtoDescricao" id="produtoDescricao" required cols="30" rows="7" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })}></textarea>
                        <br />
                        <div>
                            <div>
                                <label htmlFor="produtoQuant" className={`${global.semibold15} ${global.darkGray}`}>
                                    Estoque
                                </label>
                                <input type="number" name="produtoQuant" id="produtoQuant" required value={form.stock} onChange={(e) => setForm({ ...form, stock: parseFloat(e.target.value) })} />
                            </div>
                            <div>
                                <label htmlFor="produtoPreco" className={`${global.semibold15} ${global.darkGray}`} >
                                    Preço Unitário
                                </label>
                                <input type="number" name="produtoPreco" required id="produtoPreco" step='0.01' className={styles.inputNumber} value={form.price} onChange={(e) => setForm({ ...form, price: parseFloat(e.target.value) })} />
                            </div>
                        </div>
                        <Botão content="Adicionar Produto" />
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    )
}